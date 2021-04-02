/* eslint-disable no-undef */
import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../src/app';
import factory from './utils/factories';

describe('User', () => {
  let user = {};

  beforeAll(async () => {
    user = await factory.attrs('User');
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/register')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const response = await request(app)
      .post('/register')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('should encrypt user password when new user created', async () => {
    const { password } = user;

    const passwordHash = await bcrypt.hash(password, 8);

    const compareHash = await bcrypt.compare(password, passwordHash);

    expect(compareHash).toBe(true);
  });
});
