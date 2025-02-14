
const express = require('express');
const router = express.Router();
const dbConnect = require('../../lib/dbConnect');
const HomeContent = require('../../models/HomeContent');  
router.get('/', async (req, res) => {
  try {
    await dbConnect();
    const homeContent = await HomeContent.findOne({});
    if (!homeContent) {
      return res.status(404).json({
        success: false,
        message: 'Home content not found',
      });
    }
    return res.json({ success: true, data: homeContent });
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
 
    const existingContent = await HomeContent.findOne({});

    if (existingContent) { 
      const updatedContent = await HomeContent.findOneAndUpdate({}, body, { new: true });
      return res.status(200).json({ success: true, data: updatedContent });
    }
 
    const homeContent = new HomeContent(body);
    await homeContent.save();
    return res.status(201).json({ success: true, data: homeContent });
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
    const homeContent = await HomeContent.findOneAndUpdate({}, body, { new: true });
    if (!homeContent) {
      return res.status(404).json({
        success: false,
        message: 'Home content not found',
      });
    }
    return res.json({ success: true, data: homeContent });
  } catch (error) {
    console.error(error);
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
    const homeContent = await HomeContent.findOneAndUpdate({}, body, { new: true });
    if (!homeContent) {
      return res.status(404).json({
        success: false,
        message: 'Home content not found',
      });
    }
    return res.json({ success: true, data: homeContent });
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
    const deletedContent = await HomeContent.findOneAndDelete({});
    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        message: 'Home content not found',
      });
    }
    return res.json({ success: true, message: 'Home content deleted' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
module.exports = router;
