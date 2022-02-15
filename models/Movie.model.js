//  Add your code here
const { Schema, model } = require('mongoose');

const Moviemodel = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: 'ID' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', Moviemodel);