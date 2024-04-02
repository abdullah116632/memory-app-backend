import multer from "multer";

const userStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "image")
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "-" + file.originalname)
    }
});
// const fileFilter = (req, file, cb) => {
//     if(!file.mimetype.startsWith("image/")){
//         return cb(new Error("Only image files are allowed"), false);
//     }
//     if(file.size > MAX_FILE_SIZE){
//         return cb(new Error("File size exit the limit"), false);
//     }
//     if(!ALLOWED_FILE_TYPES.includes(file.mimetype)){
//         return cb(new Error("File extention is allowed"), false)
//     }
//     cb(null, true);
// }

const userUpload = multer({
    storage: userStorage,
})

export {userUpload}