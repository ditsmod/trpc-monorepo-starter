import type { AnyTRPCRouter } from '@trpc/server';
import { createTRPCClient, httpBatchLink, loggerLink, TRPCClient } from '@trpc/client';
import { tap } from '@trpc/server/observable';
import { inspect } from 'node:util';
import type { PostRouter } from 'server';

const url = 'http://localhost:2021/trpc';
const mergedRouters = createTRPCClient<AnyTRPCRouter>({
  links: [
    function callback() {
      return ({ op, next }) => {
        // console.log('->', op.type, op.path, op.input);

        return next(op).pipe(
          tap({
            next(result) {
              console.log(
                `${op.path}.${op.type}(${inspect(op.input, false, 2)}) ->`,
                `\x1b[34m ${inspect(result.result.data, false, 2)}\x1b[0m`
              );
            },
          })
        );
      };
    },
    httpBatchLink({ url }),
  ],
});

const postRouter = mergedRouters as TRPCClient<PostRouter>;
const post = await postRouter.post.createPost.mutate({ title: 'hello client' });
await postRouter.post.comments.listComments.query();
const comment = await postRouter.post.comments.createComment.mutate({ title: 'this is tRPC demo' });
await postRouter.post.comments.listComments.query();

console.log('👌 should be a clean exit if everything is working right');
