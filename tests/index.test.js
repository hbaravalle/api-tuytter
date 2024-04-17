import app from "../api/app";
import request from "supertest";

const sendPostRequest = async (url, data = {}) => {
  return await request(app).post(url).send(data);
};

const sendGetRequest = async (url, data = {}) => {
  return await request(app).get(url).send();
};

describe("GET /api/users", () => {
  it("Should response with a 200 status code", async () => {
    const response = await sendGetRequest("/api/users");
    expect(response.statusCode).toBe(200);
  });

  it("Should respond with a content-type of application/json", async () => {
    const response = await request(app).get("/api/users").send();
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  it("Should respond with an object", async () => {
    const response = await request(app).get("/users").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("POST /users", () => {
  const newUser = {
    firstname: "Obi-wan",
    lastname: "Kenobi",
    username: "benkenobi",
    email: "obiwan@starwars.com",
  };

  it("Should respond with a 201 status code", async () => {
    const response = await sendPostRequest("/api/users", newUser);
    expect(response.statusCode).toBe(201);
  });

  it("Should respond with a content-type of application/json", async () => {
    const response = await sendPostRequest("/api/users", newUser);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
