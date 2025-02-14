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
    const existingPortfolio = await Portfolio.findOne({});
    if (existingPortfolio) { 
      const updatedPortfolio = await Portfolio.findOneAndUpdate({}, body, { new: true });
      return res.status(200).json({ success: true, data: updatedPortfolio });
    }
 
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



router.put('/', async (req, res) => {
  try {
    await dbConnect();
    const body = req.body;

    const updatedPortfolio = await Portfolio.findOneAndUpdate({}, body, { new: true });
    if (!updatedPortfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio content not found to update',
      });
    }
    return res.json({ success: true, data: updatedPortfolio });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});
 
router.patch('/', async (req, res) => {
  try {
    await dbConnect();
    const body = req.body;

    const updatedPortfolio = await Portfolio.findOneAndUpdate({}, body, { new: true });
    if (!updatedPortfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio content not found to update',
      });
    }
    return res.json({ success: true, data: updatedPortfolio });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});
 
router.delete('/', async (req, res) => {
  try {
    await dbConnect();
    const deletedPortfolio = await Portfolio.findOneAndDelete({});
    if (!deletedPortfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio content not found to delete',
      });
    }
    return res.json({ success: true, message: 'Portfolio content deleted' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
