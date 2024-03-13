const ProductModule = require("../module/productModule");

const addProduct = async (req, res) => {
  const newProduct = new ProductModule({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  try {
    const savedProduct = await ProductModule.create(newProduct);
    return res
      .status(201)
      .json({ msg: "Product added successfully", data: savedProduct });
  } catch (error) {
    res.status(400).send(error);
  }
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
