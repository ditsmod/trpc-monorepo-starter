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

### Add `AGENTS.md` and `SKILL.md` for AI agents {#add-agent-skills}

The file [AGENTS.md][1] is intended for AI agents and should be placed in the root directory of the repository. This file will be taken into account by the AI agent every time you interact with the agent. To copy the latest version of `AGENTS.md`, run the following command:

```bash
npm run setup:agents
```

Additionally, you can install [AI agent skills][2] to help them better understand the specifics of Ditsmod applications:

```bash
npx skills add ditsmod/agent-skills --skill '*' -y
```

AI agent skills are only loaded when needed, when you ask something relevant to them.

[1]: https://github.com/ditsmod/agent-skills/blob/main/AGENTS.md
[2]: https://github.com/ditsmod/agent-skills/tree/main
