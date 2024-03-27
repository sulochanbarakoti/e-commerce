const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
} = require("../controller/productController");
const upload = require("../service/multerConfig");

router.route("/product/add", upload.single("image")).post(addProduct);
router.route("/product/all").get(getAllProducts);

module.exports = router;
