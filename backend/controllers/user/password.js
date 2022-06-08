

const UserSchema = require('../../models/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../../utils/sendEmail')

const {google} = require('googleapis')
const {OAuth2} = google.auth
const {CLIENT_URL} = process.env


const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
exports.forgotPassword= async (req, res) => {
    try {
        const {email} = req.body
        const user = await UserSchema.findOne({email})
        if(!user) return res.status(400).json({msg: "This email does not exist."})

        const access_token = createAccessToken({id: user._id})
        const url = `${CLIENT_URL}/user/reset/${access_token}`

        sendMail(email, url, "Reset your password")
        res.json({msg: "Re-send the password, please check your email."})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

 exports.resetPassword=async (req, res) => {
        try {
            const {password} = req.body
            console.log(password)
            const passwordHash = await bcrypt.hash(password, 12)

            await UserSchema.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
   exports.activateEmail=async (req, res) => {
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

            const {name, email, password} = user

            const check = await UserSchema.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newUser = new UserSchema({
                name, email, password
            })

            await newUser.save()

            res.json({msg: "Account has been activated!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }