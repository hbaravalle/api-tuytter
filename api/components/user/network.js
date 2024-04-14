const express = require("express");
const { nanoid } = require("nanoid");
const router = express.Router();

const response = require("../../../network/response");
const controller = require("./index");

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);

async function list() {
  async (req, res) => {
    try {
      const list = await controller.list();
      response.success(req, res, list, 200);
    } catch (error) {
      response.error(req, res, null, error.message, 500);
    }
  };
}

async function get() {
  async (req, res) => {
    try {
      const user = await controller.get(Number(req.params.id));
      response.success(req, res, user, 200);
    } catch (error) {
      response.error(req, res, error.message, 500);
    }
  };
}

async function upsert() {
  async (req, res) => {
    try {
      const newUser = {
        id: nanoid(),
        email: req.body.email,
      };
      await controller.upsert(newuser);
      response.success(req, res, newUser, 201);
    } catch (error) {
      response.error(req, res, error.message, 500);
    }
  };
}

module.exports = router;
