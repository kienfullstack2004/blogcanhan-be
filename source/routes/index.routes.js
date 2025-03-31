const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");
const initRoutes = (app) => {

    app.use('/auth',authRoutes);
    app.use('/admin',adminRoutes);

    return app.use('/',(req,res,next)=>{
        res.status(200).json('Not found Page !');
    })
}

module.exports = initRoutes;