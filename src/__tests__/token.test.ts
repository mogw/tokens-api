import request from 'supertest';
import app from '../app';
import { AppDataSource } from '../database/dataSource';

// Initialize the test data source
beforeAll(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('Test Data Source has been initialized!');
    })
    .catch((err: any) => {
      console.error('Error during Test Data Source initialization:', err);
      process.exit(1);
    });
});

// Destroy the test data source
afterAll(async () => {
  await AppDataSource.destroy()
    .then(() => console.log('Test Data Source has been destroyed'))
    .catch((err: any) => console.error('Error during Test Data Source destruction:', err));
});

// Test for creating a new token
describe('POST /api/v1/tokens', () => {
  it('should create a new token and return it', async () => {
    const newToken = {
      name: 'Bitcoin',
      ticker: 'BTC',
      description: 'A digital cryptocurrency',
    };

    const res = await request(app)
      .post('/api/v1/tokens')
      .send(newToken)

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toEqual(newToken.name);
    expect(res.body.ticker).toEqual(newToken.ticker);
    expect(res.body.description).toEqual(newToken.description);
  });

  it('fails to create a token without a name', async () => {
    const response = await request(app).post('/api/v1/tokens').send({
      ticker: `BTC-${Date.now()}`,
      description: 'A digital cryptocurrency'
    });
  
    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          msg: 'Name is required'
        })
      ])
    );
  });

  it('fails to create a token without a ticker', async () => {
    const response = await request(app).post('/api/v1/tokens').send({
      name: `Bitcoin-${Date.now()}`,
      description: 'A digital cryptocurrency'
    });
  
    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          msg: 'Ticker is required'
        })
      ])
    );
  });

  it('fails to create a token without a description', async () => {
    const response = await request(app).post('/api/v1/tokens').send({
      name: `Bitcoin-${Date.now()}`,
      ticker: `BTC-${Date.now()}`
    });
  
    expect(response.statusCode).toBe(400);
    expect(response.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          msg: 'Description is required'
        })
      ])
    );
  });
});

// Test for retrieving token details
describe('GET /api/v1/tokens/:id', () => {
  it('should retrieve the token details', async () => {
    const res = await request(app).get('/api/v1/tokens/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should return 404 for a non-existent token', async () => {
    const res = await request(app).get('/api/v1/tokens/9999'); // Assuming this ID does not exist
    expect(res.statusCode).toEqual(404);
  });
});
