import { featureModule } from '@ditsmod/core';
import { initTrpcModule, ModuleWithTrpcRoutes } from '@ditsmod/trpc';

import { CommentController } from './comment.controller.js';

@initTrpcModule({
  controllers: [CommentController],
})
@featureModule()
export class CommentModule implements ModuleWithTrpcRoutes {
  getRouterConfig() {
    return {
      createComment: CommentController.prototype.createComment,
      listComments: CommentController.prototype.listComments,
    };
  }
}
