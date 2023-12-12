const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
    validateForm(req, res);

    const potentialLogin = await pool.query(
        "SELECT id, username, passhash FROM users u WHERE u.username=$1", 
        [req.body.username, ]
    );

    if (potentialLogin.rowCount > 0) {
        const isSamePass = await bcrypt.compare(
            req.body.password, 
            potentialLogin.rows[0].passhash
        );
        if (isSamePass){
            req.session.user = {
                username: req.body.username,
                id: potentialLogin.rows[0].id,
            };
            res.json({loggedIn: true, username: req.body.username});            
        } else {
            
        }
    } else {
        console.log("not good");
        response.json({loggedIn: false, status: "Wrong username or password"});
    }   
});

router.post("/signup", async (req, res) => {
    validateForm(req, res, true);

    const existingUsername = await pool.query(
        "SELECT username FROM users WHERE username=$1", 
        [req.body.username]
    );

    const existingEmail = await pool.query(
        "SELECT email FROM users WHERE email=$1", 
        [req.body.email]
    );

    // check for existing username or email
    if (existingUsername.rowCount != 0) {
        console.log("not good");
        res.json({loggedIn: false, status: "Username taken"});
    } else if (existingEmail.rowCount != 0){
        console.log("not good");
        res.json({loggedIn: false, status: "Email taken"});
    } else {
        // Register
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const newUserQuery = await pool.query(
            "INSERT INTO users(username, passhash, email) values ($1,$2,$3) RETURNING id, username, email",
            [req.body.username, hashedPass, req.body.email,]      
        );
        req.session.user = {
            username: req.body.username,
            email: req.body.email,
            id: newUserQuery.rows[0].id,
        };
        res.json({loggedIn: true, username: req.body.username, email: req.body.email});
    } 
});

module.exports = router;