const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const userRegisteration = async (req, res) => {
    const { name, number, email, password, address } = req.body
    const user = await User.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && number && email && password && address) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const doc = new User({
                    name: name,
                    number: number,
                    email: email,
                    password: hashPassword,
                    address: address
                })
                const user = await doc.save()
                const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                res.redirect('/');
                res.send('success');

            } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Unable to Register" })
            }

        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
}

module.exports = userRegisteration;