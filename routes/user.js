import express from "express";
import User from "../models/user";

const router = express.Router();


router.post('/post', async(req, res) => {
    try {
        const { name, password} = req.body
        if (name === 'admin' && password === 'admin') {
            return res.status(200).json('Welcome to the admin page')
        }
    }
})
