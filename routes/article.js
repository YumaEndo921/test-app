const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("記事です")
  });
  
router.get("/info", (req, res) => {
res.send("記事情報です")
});

module.exports = router;