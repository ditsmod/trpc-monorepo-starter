## About the project

This monorepository includes [Ditsmod](https://ditsmod.github.io/en/) applications starter.

All applications are located in `apps/*`.

From start you need to do:

```bash
npm install
```

After that, copy `apps/server/.env-example` to `apps/server/.env`:

```bash
cp apps/server/.env-example apps/server/.env
```

And fill this file.

## Start the web server in develop mode

```bash
npm run start:dev
```

You can check the server operation using `curl`:

```bash
curl -i http://localhost:2021/trpc/post.comments.listComments
```

Or simply by going to [http://localhost:2021/trpc/post.comments.listComments](http://localhost:2021/trpc/post.comments.listComments) in your browser.

By default, the application works with `info` log level. You can change it in the file `apps/server/src/app/app.module.ts`.

## Start the web server in production mode

```bash
npm run build
npm run start-prod
```