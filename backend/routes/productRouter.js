import { Router } from "express";
import { getProduct, getAllProducts } from "../controllers/productController.js";
import checkObjectId from "../middleware/checkObjectId.js";
const router = Router()

router.route("/").get(getAllProducts)
router.route("/:id").get(checkObjectId, getProduct)

export default router