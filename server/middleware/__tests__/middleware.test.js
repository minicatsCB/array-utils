const request = require("supertest");
const app = require("../../app/app");
const httpMocks = require('node-mocks-http');
const responseMiddleware = require('../response');

const SUCCESS = 'success';
const FAIL = 'fail';

describe('Cors Middleware', () => {
    it('sets Access Control Allow Origin header', async () => {
        const response = await request(app).get('/data');

        expect(response.headers['access-control-allow-origin']).toBeDefined();
        expect(response.headers['access-control-allow-origin']).toEqual('*');
    });
});

describe('Logger Middleware', () => {
    let originalNodeEnv = process.env.NODE_ENV;

    beforeEach(() => {
        process.env.NODE_ENV = 'IWantToLogEverything';
    });

    afterEach(() => {
        process.env.NODE_ENV = originalNodeEnv;
    });
    
    it('logs input message to the Node.js console', async () => {
        const spy = jest.spyOn(console, 'log');
        await request(app).get('/data');

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

describe('Response Middleware', () => {
    let req, res, next;
  
    beforeEach(() => {
      req = httpMocks.createRequest();
      res = httpMocks.createResponse();
      next = jest.fn();
    });
  
    test('res.sendData adds success response method', () => {
      const testData = { key: 'value' };
      responseMiddleware(req, res, next);
      res.sendData(testData);
      expect(res._getData()).toEqual(JSON.stringify({ status: SUCCESS, data: testData }));
    });
  
    test('res.sendFail adds failure response method', () => {
      const testReasons = ['Error reason'];
      const statusCode = 400;
      responseMiddleware(req, res, next);
      res.sendFail(testReasons, statusCode);
      expect(res.statusCode).toBe(statusCode);
      expect(res._getData()).toEqual(JSON.stringify({ status: FAIL, data: testReasons }));
    });
  });