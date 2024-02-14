import {Router} from "express";
import { getAll,getOne,insertOne,deleteOne,updateOne } from "../controllers/products.controler.js";

const router = Router();
router.get("/", getAll); 
router.get("/:barcode", getOne); 

router.post("/", insertOne);

router.get("/delete/:barcode", deleteOne);

router.put("/:barcode", updateOne); 

export default router;
