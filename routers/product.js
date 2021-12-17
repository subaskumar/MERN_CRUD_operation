const router = require("express").Router();  // here we initiate express

const productController = require('../controller/productController');
router.post("/", productController.product_create);
router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);
router.put("/:productId", productController.product_update);
router.delete("/:productId", productController.product_delete);

module.exports = router;
