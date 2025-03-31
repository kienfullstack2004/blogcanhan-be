const service = require("../services/admin.services");


// [create] /post
module.exports.createPost = async (req, res, next) => {
    try {
        const responsive = await service.createPostService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success: 1,
            message: "Error Server Error"
        })
    }
}


module.exports.updatePost = async (req, res, next) => {
    try {
        const responsive = await service.updatePostSevice(req.params,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success: 1,
            message: "Error Interal Server"
        })
    }
}

module.exports.deletePost = async(req,res,next) => {
    try {
        const responsive = await service.deletePostSevice(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server"
        })
    }
} 

module.exports.getAllPost = async(req,res,next) => {
    try {
        const responsive = await service.getAllPostSevice();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}

module.exports.getOnePost = async(req,res,next) => {
    try {
        const responsive = await service.getOnePostServer(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}

module.exports.createActive = async(req,res,next) => {
    try {
        const responsive = await service.createActiveService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}


module.exports.getAllActive = async(req,res,next) => {
    try {
        const responsive = await service.getAllActiveService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server"
        }) 
    }
}

module.exports.countactive = async(req,res,next) => {
    try {
        const responsive = await service.countactiveService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}
module.exports.countpost = async(req,res,next) => {
    try {
        const responsive = await service.countpostService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server",
        })
    }
}

module.exports.deleteactive = async(req,res,next) => {
    try {
        const responsive = await service.deleteactiveService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server"
        });
    }
}

module.exports.deleteallactive = async(req,res,next) => {
    try {
        const responsive = await service.deleteallActiveService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server"
        })
    }
}

module.exports.getAllSearch = async(req,res,next) => {
    try {
        const responsive = await service.getAllSearchService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            success:1,
            message:"Error Interal Server"
        })
    }
}