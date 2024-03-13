const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
} = require("../controller/productController");

router.route("/product/add").post(addProduct);
router.route("/product/all").get(getAllProducts);

module.exports = router;
