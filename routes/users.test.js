const app = require('../app');
const request = require('supertest');

describe("Testing users",  () => {
    test("GET /", async ()  => {
        const response = await request(app).get("/users");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('respond with a resource');
        // request(app)
        // .get('/users')
        // .expect(200);
    });
})

// describe("GET / ", () => {
//     test("It should respond with an array of students", async () => {
//       const response = await request(app).get("/");
//       expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
//       expect(response.statusCode).toBe(200);
//     });
//   });