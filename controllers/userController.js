const { User, UserLogin } = require('../models/User');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { 
      first_name, 
      last_name, 
      gender, 
      date_of_birth, 
      user_type, 
      country, 
      city, 
      display_name, 
      pharmacy_name,
      email,
      firebase_id
    } = req.body;

    // Validate that email and firebase_id are present
    if (!email || !firebase_id) {
      return res.status(400).json({ message: 'Email and Firebase ID are required' });
    }

    // Check if user already exists with this email
    const existingUser = await UserLogin.findOne({ email });
    
    if (existingUser) {
      // User already exists, return success but don't create a duplicate
      return res.status(200).json({ 
        message: 'User already registered', 
        user: existingUser,
        isExisting: true 
      });
    }

    // Create the user with default values for empty fields
    const user = new User({
      first_name: first_name || null,
      last_name: last_name || null,
      gender: gender || null,
      date_of_birth: date_of_birth || null,
      user_type: user_type || 2, // Default to regular user
      country: country || null,
      city: city || null,
      display_name: display_name || null,
      email,
      pharmacy_name: pharmacy_name || null,
      firebase_id
    });
    await user.save();

    // Create the user login
    const userLogin = new UserLogin({
      user_id: user._id,
      display_name: display_name || null,
      email,
      user_type: user_type || 2, // Default to regular user
      status: 1, // Active
      firebase_id
    });
    await userLogin.save();

    res.status(201).json({ 
      message: 'User registered successfully', 
      user,
      isExisting: false
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Update a user by Firebase ID
exports.updateUserByFirebaseId = async (req, res) => {
  try {
    const { firebase_id } = req.params;
    const { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { firebase_id },
      { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a user by Firebase ID
exports.deleteUserByFirebaseId = async (req, res) => {
  try {
    const { firebase_id } = req.params;

    const user = await User.findOneAndDelete({ firebase_id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await UserLogin.findOneAndDelete({ firebase_id });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

// Get user by Firebase ID
exports.getUserByFirebaseId = async (req, res) => {
    try {
      const { firebase_id } = req.params;
  
      const userLogin = await UserLogin.findOne({ firebase_id }).populate('user_id');
      if (!userLogin) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User found', user: userLogin });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  };

// Login a user
exports.login = async (req, res) => {
    try {
        const { display_name } = req.body;

        // Find the user login
        const userLogin = await UserLogin.findOne({ display_name });
        if (!userLogin) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: userLogin.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Get user by email
exports.getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user login by email
        const userLogin = await UserLogin.findOne({ email }).populate('user_id');
        if (!userLogin) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User found', user: userLogin });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('userLogin');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name },
            { new: true }
        );

        res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        await User.findByIdAndDelete(userId);
        await UserLogin.findOneAndDelete({ user_id: userId });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

exports.updateUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { first_name, last_name, gender, date_of_birth, country, city, display_name, pharmacy_name },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};