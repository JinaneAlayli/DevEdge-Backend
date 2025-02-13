  
  const mongoose = require('mongoose');

  const PortfolioSchema = new mongoose.Schema(
    {
      title: { type: String },
      description: { type: String },
      portfolio:{
        title: { type: String },
       projects: [
        {
          date: { type: Date },
          title: { type: String },
          slug: { type: String },
          imageUrl: { type: String },
          link: { type: String }
        }
      ]},
      quotation:{
        iconUrl:{ type: String },
        quote:{type: String},
        author:{type: String}
      },
      technology:{
        title: { type: String },
        technologies:[{
        iconUrl:{ type: String },
        slug:{type: String},
      }
        ]
      }
    },
    { collection: 'Portfolio' }
  );

  module.exports= mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);
