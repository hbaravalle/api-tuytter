import userServices from "./index.js";
import response from "../../../network/response.js";

async function list(req, res) {
  try {
    const list = await userServices.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, null, error.message, 500);
  }
}

async function get(req, res) {
  try {
    const user = await userServices.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function create(req, res) {
  try {
    const newUser = await userServices.upsert(req.body);
    response.success(req, res, newUser, 201);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function update(req, res) {
  return true;
}

export default { list, get, create, update };
