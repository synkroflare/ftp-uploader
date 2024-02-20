import { Router } from "express";
import { finalizeOrder } from "../modules/FinalizeOrder";
import { GetLIProductData } from "../modules/GetLIProductData";
import { getNuvemProductData } from "../modules/GetNuvemProductData";
import { uploadImage } from "../modules/UploadImage";

const router = Router();

router.post("/upload", uploadImage);
router.post("/finalize-order", finalizeOrder);
router.get("/product", getNuvemProductData);
router.get("/product-li", GetLIProductData);

export default router;
