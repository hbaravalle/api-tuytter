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

  async function upsert(data) {
    const user = {
      id: data.id || nanoid(),
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
    };
    if (data.password || data.username) {
      await auth.upsert({ ...user, password: data.password });
    }
    return store.upsert(TABLE, user);
  }

  async function destroy(id) {
    return store.destroy(TABLE, id);
  }

  return {
    list,
    get,
    upsert,
    destroy,
  };
}
