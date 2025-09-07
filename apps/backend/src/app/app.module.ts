import { rootModule } from '@ditsmod/core';
import type { SetAppRouterOptions, TrpcCreateCtxOpts, TrpcCreateOptions, TrpcRootModule } from '@ditsmod/trpc';
import type { AppRouterHelper } from '@ditsmod/trpc/client';

import { PostModule } from './modules/post/post.module.js';
import { createContext } from './create-context.js';

const modulesWithTrpcRoutes = [PostModule] as const;
export type AppRouter = AppRouterHelper<typeof modulesWithTrpcRoutes>;

@rootModule({
  imports: [...modulesWithTrpcRoutes],
})
export class AppModule implements TrpcRootModule {
  setTrpcCreateOptions(): TrpcCreateOptions {
    return {
      // Passing options for initTRPC.create()
    };
  }

  setAppRouter(): SetAppRouterOptions {
    return {
      basePath: '/trpc/',
      createContext
    };
  }
}
