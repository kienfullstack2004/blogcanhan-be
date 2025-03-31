const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const dotenv = require("dotenv");

cloudinary.config({
    cloud_name:'dooxladgy',
    api_key:'612667387995469',
    api_secret:'8NF6EjHIOifxaqJFzHaKp7kwwl0'
});

const storage = new multer.memoryStorage();

const handleUploadImage = async(file) => {
    const image = await cloudinary.uploader.upload(file,{
        resource_type:'auto'
    })

    return image;
}

const upload = multer({storage})

module.exports = {upload,handleUploadImage};
