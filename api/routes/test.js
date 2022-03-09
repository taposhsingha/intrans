const router = require("express").Router();
const Test = require("../models/Test");

//CREATE POST
router.post("/", async (req, res) => {
  const newTest = new Test(req.body);
  try {
    const savedTest = await newTest.save();
    res.status(200).json(savedTest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (test.username === req.body.username) {
      try {
        const updatedTest = await Test.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTest);
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

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (test.username === req.body.username) {
      try {
        await test.delete();
        res.status(200).json("Post has been deleted...");
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
    const test = await Test.findById(req.params.id);
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {});
module.exports = router;
