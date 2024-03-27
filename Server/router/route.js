const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
} = require("../controller/productController");
const upload = require("../service/multerConfig");

router.post("/product/add", upload.single("image"), addProduct);
router.get("/product/all", getAllProducts);

module.exports = router;
