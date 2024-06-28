import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

router.post('/register', async (req, res) => {
  try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
          city: req.body.city,
          country: req.body.country,
      });

      const user = await newUser.save();
      res.status(201).json(user);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json("User logged out");
});


export default router