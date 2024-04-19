import userController from "./userController.js";
import express from "express";
const router = express.Router();

router.get("/", userController.getAll);
router.get("/:id", userController.get);
router.post("/", userController.create);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

export default router;
