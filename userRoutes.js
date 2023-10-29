const express = require("express");
const router = express.Router();
const { users } = require("./DB");



router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  res.json(user);
});



module.exports = router;
