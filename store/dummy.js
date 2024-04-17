import { nanoid } from "nanoid";
import db from "./dummy.json" assert { type: "json" };

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}
async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  return data;
}
async function destroy(table, id) {
  const filtered = db[table].filter((item) => item.id !== id);
  db[table] = filtered;
  return true;
}

export default { list, get, upsert, destroy };
