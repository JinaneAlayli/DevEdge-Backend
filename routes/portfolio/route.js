
const express = require('express');
const router = express.Router();
const dbConnect = require('../../lib/dbConnect');
const Portfolio = require('../../models/Portfolio'); // Adjust the path if needed
 
router.get('/', async (req, res) => {
  try {
    await dbConnect();
    const portfolio = await Portfolio.findOne({});
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio content not found',
      });
    }
    return res.json({ success: true, data: portfolio });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
 
router.post('/', async (req, res) => {
  try {
    await dbConnect();
    const body = req.body;
    const portfolio = new Portfolio(body);
    await portfolio.save();
    return res.status(201).json({ success: true, data: portfolio });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
