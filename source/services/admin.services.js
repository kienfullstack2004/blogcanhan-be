const { v4 } = require("uuid");
const db = require("../models");
const { Op } = require("sequelize");

module.exports.createPostService = ({ title, des, image, code, link, tag }) => new Promise(async (relsove, reject) => {
    try {

        console.log({ title, des, image, code, link, tag })

        const responsive = await db.PostBlog.create({
            title, des, image, code, link, tag, id: v4()
        })

        return relsove({
            success: responsive ? 0 : 1,
            message: responsive ? "Create post success" : "Create post faily !",
        })

    } catch (error) {
        return reject(error);
    }
})

module.exports.updatePostSevice = ({ id }, { title, des, image, code, link, tag }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.PostBlog.update({
            title, des, image, code, link, tag
        }, { where: { id } })

        return relsove({
            success: responsive ? 0 : 1,
            message: responsive ? "Update post success" : "Update post faily !",
        })

    } catch (error) {
        return reject(error);
    }
})

module.exports.deletePostSevice = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.PostBlog.destroy({ where: { id } })

        return relsove({
            success: responsive ? 0 : 1,
            message: responsive ? "Delete post success" : "Delete post faily !",
        })

    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllPostSevice = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.PostBlog.findAll({})

        return relsove({
            success: responsive ? 0 : 1,
            message: responsive ? "Get all post success" : "Get all post faily !",
            data: responsive ? responsive : null
        })

    } catch (error) {
        return reject(error);
    }
})


module.exports.getOnePostServer = ({ id }) => new Promise(async (relsove, reject) => {
    try {

        console.log(id)

        const responsive = await db.PostBlog.findOne({
            where: { id }
        })
        return relsove({
            success: responsive ? 0 : 1,
            message: responsive ? "Get one post success !" : "Get one post fail !",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.createActiveService = ({ image }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Active.create({
            image,
            id:v4()
        })
        return relsove({
            success: responsive ? 0 : 1,
            messages: responsive ? "Create Active Success !" : "Create Active Faily !"
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllActiveService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await db.Active.findAll({
        })
        return relsove({
            success: responsive ? 0 : 1,
            messages: responsive ? "Get Active Success !" : "Get Active Faily !",
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})


module.exports.countactiveService = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.Active.findAndCountAll({});

        return relsove({
            success:responsive ? 0 : 1,
            message: responsive ? "Get Count Active Success" : "Get Count Active Faily",
            count:responsive ? responsive.count : null
        })
    } catch (error) {
        return reject(error);
    }
})
module.exports.countpostService = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.PostBlog.findAndCountAll({});
        
        

        return relsove({
            success:responsive ? 0 : 1,
            message: responsive ? "Get Count Post Success" : "Get Count Post Faily",
            count:responsive ? responsive.count : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.deleteactiveService = ({id}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.Active.destroy({
            where:{id}
        })
        return relsove({
            success:responsive ? 0 : 1,
            message: responsive ? "Delete success" : "Delete fail"
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.deleteallActiveService = () => new Promise(async(relsove,reject)=>{
    try {
      
        const responsive = await db.Active.truncate();
        // console.log(responsive)
        return relsove({
            success:responsive,
            message:"Delete success",
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports.getAllSearchService = ({search}) => new Promise(async(relsove,reject)=>{
    try {
        console.log('in server')
        const responsive = await db.PostBlog.findAll({
            where:{
               title:{ [Op.like]: `%${search}%`}  
            }
        })

        console.log(responsive)
        return relsove({
            success:responsive ? 0 : 1,
            data: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})