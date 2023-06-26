const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
      type:String,
      required: [true, 'A product must have a name'],
      unique: true
  },
  description:{
      type: String,
  },
  price: {
      type: Number,
      required:[true, 'A product must have a price']
  },
  published: {
      type: Boolean,
  },
  category: {
      type: String,
  }
  
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product;

// module.exports = mongoose => {

//     var schema = mongoose.Schema(
  
//       {
  
//         name: String,
  
//         description: String,
  
//         price: Number,
  
//         published:Boolean,
  
//         category: String
  
//       },
  
//     );
  
   
  
//     schema.method("toJSON", function() {
  
//       const { __v, _id, ...object } = this.toObject();
  
//       object.id = _id;
  
//       return object;
  
//     });
  
   
  
//     const  Products = mongoose.model("products", schema);
  
//     return Products;
  
//   };