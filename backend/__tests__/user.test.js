/* eslint-disable no-undef */
import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../src/app';
import truncate from './utils/truncate';
import factory from './utils/factories';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

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
    });

    const compareHash = bcrypt.compare('0000', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
