import userController from "./userController.js";
import express from "express";
const router = express.Router();

router.get("/", userController.list);
router.get("/:id", userController.get);
router.post("/", userController.create);
router.patch("/:id", userController.update);

export default router;
