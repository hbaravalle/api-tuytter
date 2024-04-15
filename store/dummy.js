import { nanoid } from "nanoid";

const db = {
  users: [
    {
      id: "XlMG1A-_bXMX6CsElnLoE",
      firstname: "Leia",
      lastname: "Organa",
      username: "lorgana",
      email: "leia@starwars.com",
    },
  ],
};

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}
async function create(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  return data;
}
async function update(table, id) {
  // TO DO
  return true;
}
async function destroy(table, id) {
  // TO DO
  return true;
}

export default { list, get, create, update, destroy };
