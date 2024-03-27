const productModule = require("../module/productModule");
const ProductModule = require("../module/productModule");

const addProduct = async (req, res) => {
  console.log(req.body, req.file);
  // let products = productModule.find();
  // const newProduct = new ProductModule({
  //   id: (await products).length + 1,
  //   name: req.body.name,
  //   image: req.file ? req.file.path : "undefined",
  //   category: req.body.category,
  //   new_price: req.body.new_price,
  //   old_price: req.body.old_price,
  // });
  // console.log(newProduct);
  // try {
  //   const savedProduct = await ProductModule.create(newProduct);
  //   res
  //     .status(201)
  //     .json({ msg: "Product added successfully", data: savedProduct });
  // } catch (error) {
  //   res.status(400).send(error);
  // }
};

const getAllProducts = async (req, res) => {
  try {
    let products = await ProductModule.find();
    if (!products) return res.status(404).json({ msg: "No product found" });

    res.status(200).json({
      msg: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.send(400).send(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
};
