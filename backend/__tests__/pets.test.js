/* eslint-disable no-undef */
import request from 'supertest';

import app from '../src/app';

describe('Pets', () => {
  it('Verificar se o tipo do pet está certo', async () => {
    const response = await request(app)
      .post('/pets/filter')
      .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
      .send({
        type: 'gato',
      });

    response.body.forEach((pet) => {
      expect(pet.type).toContain('gato');
    });
  });
});
