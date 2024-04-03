import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import { cloudinary } from "../config/cloudinary.js";
import { deleteImageFromCloudinary, deleteImageFromServer } from "../helper/deleteImage.js";


export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find({});

    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {

  const post = req.body;
  // console.log(req.body);
  // console.log(req.file);
  try {
    if(req.file){
      const response = await cloudinary.uploader.upload(req.file.path, {resource_type: 'auto', folder: "memoryApp"})
      await deleteImageFromServer(req.file.path);
      post.image = response.secure_url
    }

    const newPost = new PostMessage(post);
   
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params; 
  const post = req.body;

  if(req.file){
    const response = await cloudinary.uploader.upload(req.file.path, {resource_type: 'auto', folder: "memoryApp"})
      await deleteImageFromServer(req.file.path);
      post.image = response.secure_url
  }

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that Id"); //cheacking id is valid or not
   
  
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  try{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that Id");
    
    const post = await PostMessage.findById(id);
    await PostMessage.findByIdAndDelete(id)
    await deleteImageFromCloudinary(post.image)
  
    res.json({message: "post deleted successfully"});
  }catch(error){

  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that Id");

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, { new: true });

  res.json(updatedPost);
};
