const { Router } = require("express");
const router = Router();

const Project = require("../modules/projects.mongoose");

router.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.status(200).json({
    success: true,
    data: projects,
  });
});

module.exports = router;
