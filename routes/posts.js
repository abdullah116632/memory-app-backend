import express  from "express";

import { getPosts, createPost, updatePost, deletePost, likePost} from "../controllers/posts.js";
import { userUpload } from "../middleware/fileUpload.js";

const router = express.Router()

router.route("/")
        .get(getPosts)
        .post(userUpload.single("image"), createPost);

router.route("/:id")
            .patch(updatePost)
            .delete(deletePost);

router.route("/id/likePost").patch(likePost);

export default router;