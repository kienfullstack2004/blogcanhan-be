const services = require("../services/auth.services");

module.exports.login = async(req,res,next) => {
    try {
        const responsive = await services.loginService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}


module.exports.register = async(req,res,next) => {
    try {
        const responsive = await services.registerService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success: 1,
            message:"Error Interal Server"
        })
    }
}