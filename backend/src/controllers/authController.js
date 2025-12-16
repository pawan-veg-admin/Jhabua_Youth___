import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });
}

export async function register(req, res) {
  try {
    const user = await User.create(req.body);
    const token = signToken(user._id);
    return res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    return res.status(400).json({ message: "Registration failed", error: error.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = signToken(user._id);
  return res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
}

export async function getProfile(req, res) {
  return res.json({ user: req.user });
}
