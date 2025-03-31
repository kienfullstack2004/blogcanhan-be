const { handleUploadImage } = require("../config/cloudinary");

const handdleImageUrl = async (req, res, next) => {
    try {

        const base64 = Buffer.from(req.file.buffer).toString('base64');
        const data = "data:" + req.file.mimetype + ";base64," + base64;

        const image = await handleUploadImage(data);

        console.log(image)

        return res.status(200).json({
            success: 0,
            imageUrl: image?.secure_url
        })
    } catch (error) {
        return res.status(500).json({
            success: 1,
            message: 'Error Interal Server'
        })
    }
}

module.exports = {handdleImageUrl}