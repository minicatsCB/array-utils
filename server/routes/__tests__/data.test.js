const request = require('supertest');
const app = require('../../app/app');

jest.mock('../../controllers/data', () => ({
  getData: (req, res) => res.status(200).json({ status: 200, data: [{ id: 1, data: {} }, { id: 2, data: {} }] }),
  getDataById: (req, res) => res.status(200).json({ status: 200, data: [{ id: 1, data: {} }] }),
  saveData: (req, res) => res.status(200).json({ status: 200, data: null })
}));

describe('Data Routes', () => {
  test('GET /data should fetch data successfully', async () => {
    const response = await request(app).get('/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: [{ id: 1, data: {} }, { id: 2, data: {} }] });
  });

  test('GET /data/:id should fetch data by ID successfully', async () => {
    const response = await request(app).get('/data/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: [{ id: 1, data: {} }] });
  });

  test('POST / should save data successfully', async () => {
    const response = await request(app)
      .post('/data')
      .set('X-Plugin-Name', 'TestPlugin')
      .set('X-Machine-Id', 'TestMachineId')
      .send({ data: 'Test Data' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: null });
  });
});