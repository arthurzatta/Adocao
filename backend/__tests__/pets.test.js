// /* eslint-disable no-undef */
// import request from 'supertest';

// import app from '../src/app';

// describe('Pets', () => {
//   it('Verificar se o tipo do pet está certo', async () => {
//     const response = await request(app)
//       .post('/pets/filter')
//       .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
//       .send({
//         type: 'gato',
//       });

//     await response.body.forEach((pet) => {
//       expect(pet.type).toContain('gato');
//     });
//   });

//   it('Verificar o que acontece para radius negativo', async () => {
//     const response = await request(app)
//       .post('/pets/filter')
//       .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
//       .send({
//         radius: -1,
//       });

//     expect(response.body).toStrictEqual({ error: 'Radius cannot be negative' });
//   });

//   it('Verificar o que acontece se passar em estado ou cidade inexistente', async () => {
//     const response = await request(app)
//       .post('/pets/filter')
//       .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
//       .send({
//         state: 'ES',
//         city: 'Terra do nunca',
//       });

//     expect(response.body).toStrictEqual([]);
//   });

//   it('Verificar o que acontece se passar nome de usuário inexistente', async () => {
//     const response = await request(app)
//       .post('/pets/filter')
//       .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
//       .send({
//         name: 'Fulano',
//       });

//     expect(response.body).toStrictEqual([]);
//   });

//   it('Verificar se o nome é String', async () => {
//     const response = await request(app)
//       .post('/pets/filter')
//       .set({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjE3MTExMzEyLCJleHAiOjE2MTc4ODg5MTJ9.U06acROnAigMm9wPMkhJtKoVlP1jrWatnHOt7ua7AVY' })
//       .send({
//         name: 21,
//       });

//     expect(response.body).toStrictEqual({ error: 'Name is not a String' });
//   });
// });
