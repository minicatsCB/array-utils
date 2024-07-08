import { describe, expect, it } from 'vitest'
import request from "supertest";
import app from "../app";

describe('GET /', () => {
    it('responds with a 200 status code and welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "Welcome to the API",
            availableEndpoints: [
                "/data",
                "/data/:id"
            ]
        });
    });
});

describe('GET /data', () => {
    it('responds with a 200 status code', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
    });
});