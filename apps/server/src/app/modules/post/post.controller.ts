import { trpcController, TrpcRouteService, trpcRoute } from '@ditsmod/trpc';
import { z } from 'zod';

@trpcController()
export class PostController {
  @trpcRoute()
  createPost(routeService: TrpcRouteService) {
    return routeService.procedure.input(z.object({ title: z.string() })).mutation(({ input }) => {
      return { ...input, id: 1, body: 'post text' };
    });
  }
}
