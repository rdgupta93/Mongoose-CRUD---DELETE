const mongoose = require('mongoose');


     mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });
    const saveInDB = async()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"m 13",price:15500,brand:"max",category:"mobile"});
    let result = await data.save();
    console.log(result)
}

const updateInDB = async()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name:"m 13"},
      {
        $set:{price:14500,name:"m 14"}
    }
    )
    console.log(data)
}
const deleteInDB = async()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({name:"m 14"})
    console.log(data);
}

deleteInDB();


