import { trpcController, TrpcRouteService, trpcRoute } from '@ditsmod/trpc';
import { z } from 'zod';

@trpcController()
export class CommentController {
  @trpcRoute()
  createComment(routeService: TrpcRouteService) {
    return routeService.procedure.input(z.object({ title: z.string() })).mutation(({ input }) => {
      return { ...input, id: 10, body: 'comment text' };
    });
  }

  @trpcRoute()
  listComments(routeService: TrpcRouteService) {
    return routeService.procedure.query((opts) => {
      return [{ id: 1, title: 'first comment', body: 'text of first comment' }];
    });
  }
}
