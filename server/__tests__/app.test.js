const request = require("supertest");
const app = require("../app");

describe('GET /data', () => {
    it('responds with a 200 status code', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
    });
});