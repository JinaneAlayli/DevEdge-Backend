const mongoose = require('mongoose');

const HomeContentSchema = new mongoose.Schema(
  {
    hero: {
      title: { type: String },
      description: { type: String },
      buttonTextLeft: { type: String },
      buttonTextRight: { type: String },
      buttonLinkLeft: { type: String },
      buttonLinkRight: { type: String },
    },
    about: {
      left: {
        title: { type: String },
        WebAppTypes: [
          {
            title: { type: String },
          },
        ],
        description: { type: String },
        buttonText: { type: String },
        buttonLink: { type: String },
      },
      right: {
        portfolioid1: { type: Number },
        portfolioid2: { type: Number },
        portfolioid3: { type: Number },
      },
    },
    services: {
      title: { type: String },
      description: { type: String },
      services: [
        {
          title: { type: String },
          iconURL: { type: String },
          DescTitle: { type: String },
          description: { type: String },
        },
      ],
    },
    requestConsultation: {
      title: { type: String },
      slug: { type: String },
      buttonText: { type: String },
      buttonLink: { type: String },
    },
    recentProject: {
      title: { type: String },
      buttonText: { type: String },
      buttonLink: { type: String },
    },
  },
  { collection: 'homecontents' }
);

module.exports =
  mongoose.models.HomeContent ||
  mongoose.model('HomeContent', HomeContentSchema, 'homecontents');
