const request = require('supertest');
const app = require('../src/app.js').default;

describe('Testes da API', () => {
  test('GET /converter/50 retorna 500', async () => {
    const response = await request(app).get('/converter/50');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ original: 50, convertido: 500 });
  });

  test('POST /processar com dados válidos', async () => {
    const response = await request(app)
      .post('/processar')
      .send({ jogadores: [{ id: '1', name: 'Player', score: 30 }] });
    
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('convertedScore', 300);
  });
});
