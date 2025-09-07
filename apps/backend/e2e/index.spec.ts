import request from 'supertest';
import { TrpcApplication } from '@ditsmod/trpc';
import type { Server } from 'http';
import { jest } from '@jest/globals';

import { AppModule } from '#app/app.module.js';

describe('Integration tests for HelloWorldController', () => {
  let server: Server;
  let testAgent: ReturnType<typeof request>;

  beforeAll(async () => {
    jest.restoreAllMocks();
    const app = await TrpcApplication.create(AppModule);
    server = app.server as Server;
    testAgent = request(server);
    console.log = jest.fn;
  });

  afterAll(() => {
    server.close();
  });

  it('create post', async () => {
    const result = await testAgent.post('/trpc/post.createPost').send({ title: 'hello client' }).expect(200);
    expect(result.body.result.data).toEqual({ title: 'hello client', id: 1, body: 'post text' });
  });

  it('query comments', async () => {
    const result = await testAgent.get('/trpc/post.comments.listComments').expect(200);
    expect(result.body.result.data).toEqual([{ id: 1, title: 'first comment', body: 'text of first comment' }]);
  });

  it('create comment', async () => {
    const result = await testAgent
      .post('/trpc/post.comments.createComment')
      .send({ title: 'this is tRPC demo' })
      .expect(200);
    expect(result.body.result.data).toEqual({ title: 'this is tRPC demo', id: 10, body: 'comment text' });
  });

  it('list of comments', async () => {
    const result = await testAgent.get('/trpc/post.comments.listComments').expect(200);
    expect(result.body.result.data).toEqual([{ id: 1, title: 'first comment', body: 'text of first comment' }]);
  });
});
