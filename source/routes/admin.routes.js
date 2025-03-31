const express = require("express");
const router = express.Router();
const { upload } = require("../config/cloudinary");

const controllers = require("../controllers/admin.controllers");
const { handdleImageUrl } = require("../controllers/uploadcloud.controllers");

router.post('/upload', upload.single('my_file'), handdleImageUrl)


router.get('/getallpost', controllers.getAllPost);
router.post('/createactive', controllers.createActive);
router.get('/countpost',controllers.countpost);
router.get('/countactive',controllers.countactive);
router.get('/getallactive', controllers.getAllActive);
router.post('/createpost', controllers.createPost);
router.delete('/deleteallactive',controllers.deleteallactive);
router.get('/search/:search',controllers.getAllSearch);
router.delete('/deleteactive/:id',controllers.deleteactive);
router.get('/getonepost/:id',controllers.getOnePost);
router.post('/updatepost/:id', controllers.updatePost);

router.delete('/deletepost/:id', controllers.deletePost);


module.exports = router;