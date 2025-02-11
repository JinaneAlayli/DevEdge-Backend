 
const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema(
  {
    header: { type: String },
    description: { type: String },
    projects: [
      {
        date: { type: Date },
        title: { type: String },
        slug: { type: String },
        imageUrl: { type: String },
        link: { type: String }
      }
    ]
  },
  { collection: 'Portfolio' }
);

module.exports= mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);
