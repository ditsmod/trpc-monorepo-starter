import { ModuleWithTrpcRoutes, trpcModule } from '@ditsmod/trpc';
import { RouterOf } from '@ditsmod/trpc/client';

import { CommentModule } from './comments/comment.module.js';
import { PostController } from './post.controller.js';

// For TRPCClient
export type PostRouter = RouterOf<typeof PostModule>;

@trpcModule({
  imports: [CommentModule],
  controllers: [PostController],
})
export class PostModule implements ModuleWithTrpcRoutes {
  getRouterConfig() {
    return {
      post: {
        createPost: PostController.prototype.createPost, // Pointed to a controller
        comments: CommentModule.prototype.getRouterConfig, // Pointed to a module
      },
    };
  }
}
