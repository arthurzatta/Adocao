/* eslint-disable no-undef */
import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../src/app';
import factory from './utils/factories';

describe('User', () => {
  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/register')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/register')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('should encrypt user password when new user created', async () => {
    const user = await factory.attrs('User', {
      password: '0000',
      password_hash: await bcrypt.hash('0000', 8),
    });

    const compareHash = await bcrypt.compare('0000', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
