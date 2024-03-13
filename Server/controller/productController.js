const ProductModule = require("../module/productModule");

const addProduct = async (req, res) => {
  const newProduct = new ProductModule({
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

module.exports = {
  addProduct,
};
