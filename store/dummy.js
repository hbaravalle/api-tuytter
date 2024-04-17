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
    {
      id: "XlMG1A-_bXMX6CsElnLoE2",
      firstname: "Luke",
      lastname: "Skywalker",
      username: "imluke_ok",
      email: "luke@starwars.com",
    },
    {
      id: "XlMG1A-_bXMX6CsElnLoE3",
      firstname: "Han",
      lastname: "Solo",
      username: "milleniumfalcon2024",
      email: "han@starwars.com",
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
export { db };
