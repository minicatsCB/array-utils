import { describe, expect, it, vi, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../../app/app.js';

vi.mock('../../controllers/data.js', () => ({
  __esModule: true,
  default: {
    getData: vi.fn((req, res) => res.status(200).json({ status: 200, data: [{ id: 1, data: {} }, { id: 2, data: {} }] })),
    getDataById: vi.fn((req, res) => res.status(200).json({ status: 200, data: [{ id: 1, data: {} }] })),
    saveData: vi.fn((req, res) => res.status(200).json({ status: 200, data: null }))
  }
}));

describe('Data Routes', () => {
  it('GET /data should fetch data successfully', async () => {
    const response = await request(app).get('/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: [{ id: 1, data: {} }, { id: 2, data: {} }] });
  });

  it('GET /data/:id should fetch data by ID successfully', async () => {
    const response = await request(app).get('/data/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: [{ id: 1, data: {} }] });
  });

  it('POST / should save data successfully', async () => {
    const response = await request(app)
      .post('/data')
      .set('X-Plugin-Name', 'TestPlugin')
      .set('X-Machine-Id', 'TestMachineId')
      .send({ data: 'Test Data' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 200, data: null });
  });
});