import { trpcModule, ModuleWithTrpcRoutes } from '@holu/trpc';

import { CommentController } from './comment.controller.js';

@trpcModule({
  controllers: [CommentController],
})
export class CommentModule implements ModuleWithTrpcRoutes {
  getRouterConfig() {
    return {
      createComment: CommentController.prototype.createComment,
      listComments: CommentController.prototype.listComments,
    };
  }
}
