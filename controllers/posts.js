import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import { cloudinary } from "../config/cloudinary.js";


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
  const { id: _id } = req.params;  //hare just rename the id to _id;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with that Id"); //cheacking id is valid or not
   
  
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that Id");

  await PostMessage.findByIdAndDelete(id)

  res.json({message: "post deleted successfully"});
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that Id");

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, { new: true });

  res.json(updatedPost);
};
