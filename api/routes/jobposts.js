const router = require("express").Router();
const JobPost = require("../models/JobPost");

//CREATE JOBPOST
router.post("/", async (req, res) => {
  const NewJobPost = new JobPost(req.body);
  try {
    const savedPost = await NewJobPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE JOBPOST
router.put("/:id", async (req, res) => {
  try {
    const Jobpost = await JobPost.findById(req.params.id);
    if (Jobpost.username === req.body.username) {
      try {
        const updatedPost = await JobPost.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE JOBPOST
router.delete("/:id", async (req, res) => {
  try {
    const Jobpost = await JobPost.findById(req.params.id);
    if (Jobpost.username === req.body.username) {
      try {
        await Jobpost.delete();
        res.status(200).json("JobPost has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const Jobpost = await JobPost.findById(req.params.id);
    res.status(200).json(Jobpost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const typeName = req.query.type;
  try {
    let Jobposts;
    if (username) {
      Jobposts = await JobPost.find({ username });
    } else if (typeName) {
      posts = await Post.find({
        jobtype: {
          $in: [typeName],
        },
      });
    } else {
      Jobposts = await JobPost.find();
    }
    res.status(200).json(Jobposts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
