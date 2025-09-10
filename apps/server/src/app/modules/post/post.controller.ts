import { controller, RouteService, trpcRoute } from '@ditsmod/trpc';
import { z } from 'zod';

@controller()
export class PostController {
  @trpcRoute()
  createPost(routeService: RouteService) {
    return routeService.procedure.input(z.object({ title: z.string() })).mutation(({ input }) => {
      return { ...input, id: 1, body: 'post text' };
    });
  }
}
