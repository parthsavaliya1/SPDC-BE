const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    require:true,
  },
  images: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require:true
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
