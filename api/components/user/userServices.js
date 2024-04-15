import { nanoid } from "nanoid";
import auth from "../auth/index.js";
import dummyStore from "../../../store/dummy.js";

const TABLE = "users";

export default function (injectedStore) {
  let store = injectedStore || dummyStore;

  async function list() {
    return store.list(TABLE);
  }

  async function get(id) {
    return store.get(TABLE, id);
  }

  async function upsert(body) {
    const user = {
      id: body.id || nanoid(),
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      email: body.email,
    };
    if (body.password || body.username) {
      await auth.upsert({ ...user, password: body.password });
    }

    return store.upsert(TABLE, user);
  }

  return {
    list,
    get,
    upsert,
  };
}
