import { promises as fs } from 'fs';
import { cloudinary } from '../config/cloudinary.js';

const deleteImageFromServer = async (imagePath) => {
    try{
        await fs.access(imagePath);
        await fs.unlink(imagePath);
    }catch(err){
        throw err;
    }
}

const deleteImageFromCloudinary = async (imageUrl) => {
    const pathSegment = imageUrl.split("/");

    const lastSegment = pathSegment[pathSegment.length - 1]
    const idSegment = lastSegment.split(".");
    const publicId = idSegment[0];
    try{
        const {result} = await cloudinary.uploader.destroy(`memoryApp/${publicId}`)

        if(result !== "ok"){
            throw new Error("image was not deleted successfully from cloudnary. Please try again")
          }

    }catch(error){
        throw new Error(error);
    }

}

export {deleteImageFromServer, deleteImageFromCloudinary};