import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from './models/index.js';
import express from 'express';

const app = express();

dotenv.config();


const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({ error: 'Missing fields' });

  const user = await User.findOne({ where: { email } });
  if(!user) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password || '');
  if(!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
};

const authenticateMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.split(' ')[1];
  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch(e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};



export { login, authenticateMiddleware };
