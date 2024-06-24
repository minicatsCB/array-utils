const supertest = require('supertest');
const app = require('../../app/app');
const DataModel = require('../../models/data');

jest.mock('../../models/data');

// TODO: extract these constants to a shared file
const SUCCESS = 'success';
const FAIL = 'fail';
const ERROR = 'error';

// TODO: beforeeach -> reset database to empty or tests values

describe('Data Controller - Success', () => {
  it('should fetch all data', async () => {
    DataModel.getData.mockReturnValue([{ id: 1, name: 'Test Data' }]);
    await supertest(app)
      .get('/data')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(SUCCESS);
        expect(response.body.data).toEqual([{ id: 1, name: 'Test Data' }]);
      });
  });

  it('should fetch data by ID', async () => {
    DataModel.getDataById.mockReturnValue({ id: 2, name: 'Specific Data' });
    await supertest(app)
      .get('/data/2')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(SUCCESS);
        expect(response.body.data).toEqual({ id: 2, name: 'Specific Data' });
      });
  });


  it('should write data', async () => {
    DataModel.saveData.mockReturnValue({ status: SUCCESS, data: null });
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
    DataModel.getData.mockImplementation(() => {
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