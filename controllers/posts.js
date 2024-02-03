import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    // console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
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
   
  
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

  res.json(updatePost);
}
