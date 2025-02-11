 
const mongoose = require('mongoose');

const HomeContentSchema = new mongoose.Schema(
  {
    hero: {
      title: { type: String },
      description: { type: String },
      ctaTextLeft: { type: String },
      ctaTextRight: { type: String }
    },
    about: {
      title: { type: String } 
    },
    servicesTypes: [
      {
        title: { type: String },
        description: { type: String },
        ctaText: { type: String }
      }
    ],
    services: {
      title: { type: String },
      services: [
        {
          title: { type: String },
          iconURL: { type: String },
          description: { type: String }
        }
      ]
    },
    requestConsultation: {
      description: { type: String},
      buttonText: { type: String},
      buttonLink: { type: String}
    }
  },
  { collection: 'homecontents' }
);

module.exports= mongoose.models.HomeContent || mongoose.model('HomeContent', HomeContentSchema,'homecontents');
