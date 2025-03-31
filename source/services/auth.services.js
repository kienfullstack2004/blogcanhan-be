const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { v4 } = require("uuid");

"";


const hashPass = (
    pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(12));

module.exports.registerService = ({ username, password }) => new Promise(async (relsove, reject) => {
    try {
        const res = await db.User.findOrCreate({
            where: { username },
            defaults: {
                password: hashPass(password),
                username,
                id: v4()
            },
            raw: true
        });

        // console.log(res)

        return relsove({
            success: res[1] ? 0 : 1,
            message: res[1] ? "Register is success " : "Register is faily!",
        })
    } catch (error) {
        return reject(error)
    }
})

module.exports.loginService = ({ username, password }) => new Promise(async (relsove, reject) => {
    try {
        const res = await db.User.findOne({
            where: { username }
        });
        const isPass = res && bcrypt.compareSync(password, res.password);
        const token = isPass && jwt.sign({ id: res.id, username: res.username }, process.env.SECRET, { expiresIn: '1d' });
        return relsove({
            success: token ? 0 : 1,
            message: token ? "Logging is success " : isPass ? "Pass is wrong !" : "Loggin is faily !",
            access_token: token || null
        })
    } catch (error) {
        return reject(error);
    }
})