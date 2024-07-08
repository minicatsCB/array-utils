import {describe, expect, it, vi} from 'vitest';
import supertest from 'supertest';
import app from '../../app/app';
import database from '../../models/data.js';

vi.mock('../../models/data.js', () => ({
  __esModule: true,
  default: {
    getData: vi.fn(),
    getDataById: vi.fn(),
    saveData: vi.fn(),
  }
}));

// TODO: extract these constants to a shared file
const SUCCESS = 'success';
const FAIL = 'fail';
const ERROR = 'error';

// TODO: beforeeach -> reset database to empty or tests values

describe('Data Controller - Success', () => {
  it('should fetch all data', async () => {
    database.getData.mockReturnValue([{ id: 1, name: 'Test Data' }]);
    await supertest(app)
      .get('/data')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(SUCCESS);
        expect(response.body.data).toEqual([{ id: 1, name: 'Test Data' }]);
      });
  });

  it('should fetch data by ID', async () => {
    database.getDataById.mockReturnValue({ id: 2, name: 'Specific Data' });
    await supertest(app)
      .get('/data/2')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(SUCCESS);
        expect(response.body.data).toEqual({ id: 2, name: 'Specific Data' });
      });
  });


  it('should write data', async () => {
    database.saveData.mockReturnValue({ status: SUCCESS, data: null });
    await supertest(app)
      .post('/data')
      .send({ name: 'Linux' })
      .set('X-Plugin-Name', 'os')
      .set('X-Machine-Id', 'abcd')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(SUCCESS);
        expect(response.body.data).toEqual(null);
      });
  });
});

describe('Data Controller - Fail', () => {
  it('should fail if X-Machine-Id header is missing', async () => {
    await supertest(app)
      .post('/data')
      .set('X-Plugin-Name', 'os')
      .send({ name: 'Linux' })
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.status).toEqual(FAIL);
        expect(response.body.data).toEqual([{"location": "headers", "msg": "Invalid value", "path": "x-machine-id", "type": "field"}]);
      });
  });
});

describe('Data Controller - Error', () => {
  it('should error if something unexpected happens', async () => {
    database.getData.mockImplementation(() => {
      throw new Error('Unexpected error occurred.');
    });
    await supertest(app)
      .get('/data')
      .then((response) => {
        expect(response.statusCode).toBe(500);
        expect(response.body.status).toEqual(ERROR);
        expect(response.body.message).toEqual('Unexpected error occurred.');
      });
  });
});