import { nanoid } from "nanoid";
import dummyStore from "../../../store/dummy.js";

const TABLE = "auth";

export default function (injectedStore) {
  let store = injectedStore || dummyStore;

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.email) {
      authData.email = data.email;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
  };
}
