import {describe, expect, it, vi, beforeEach, afterEach, beforeAll} from 'vitest';
import request from "supertest";
import app from "../../app/app";
import { createRequest, createResponse } from 'node-mocks-http';
import { response } from '../index';
import database from '../../models/data.js';

vi.mock('../../models/data.js', () => ({
  __esModule: true,
  default: {
    getData: vi.fn(),
    getDataById: vi.fn(),
    saveData: vi.fn(),
  }
}));

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
        const spy = vi.spyOn(console, 'log');
        await request(app).get('/data');

        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

describe('Response Middleware', () => {
    let req, res, next;
  
    beforeEach(() => {
      req = createRequest();
      res = createResponse();
      next = vi.fn();
    });
  
    it('res.sendData adds success response method', () => {
      const testData = { key: 'value' };
      response(req, res, next);
      res.sendData(testData);
      expect(res._getData()).toEqual(JSON.stringify({ status: SUCCESS, data: testData }));
    });
  
    it('res.sendFail adds failure response method', () => {
      const testReasons = ['Error reason'];
      const statusCode = 400;
      response(req, res, next);
      res.sendFail(testReasons, statusCode);
      expect(res.statusCode).toBe(statusCode);
      expect(res._getData()).toEqual(JSON.stringify({ status: FAIL, data: testReasons }));
    });
  });

  describe('Unexpected Error Middleware', () => {
    beforeAll(async () => {
      database.getData.mockImplementation(() => { throw new Error('Forced error') });
    });

    it('should respond with 500 and error message on error', async () => {
      const response = await request(app)
        .get('/data')
        .expect('Content-Type', /json/)
        .expect(500);
  
      expect(response.body).toEqual({
        status: 'error',
        message: 'Forced error'
      });
    });
  });