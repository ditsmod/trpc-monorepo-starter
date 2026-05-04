import { trpcRootModule, type SetAppRouterOptions, type TrpcCreateOptions, type TrpcRootModule } from '@ditsmod/trpc';
import type { AppRouterHelper } from '@ditsmod/trpc/client';

import { PostModule } from './modules/post/post.module.js';

const modulesWithTrpcRoutes = [PostModule] as const;
export type AppRouter = AppRouterHelper<typeof modulesWithTrpcRoutes>;

@trpcRootModule({
  imports: [...modulesWithTrpcRoutes],
})
export class AppModule implements TrpcRootModule {
  setTrpcCreateOptions(): TrpcCreateOptions {
    return {
      // Passing options for initTRPC.create()
    };
  }

  setAppRouterOptions(): SetAppRouterOptions {
    return {
      basePath: '/trpc/',
    };
  }
}
