---
id: QwM4qXqsfcwsMvGC42A10
title: Publish
desc: ''
updated: 1639704404912
created: 1639703041566
---

## To publish to github pages, must perform the following:
Run
```
npm init -y
npm install @dendronhq/dendron-cli
```
to initialize the npm project and install the module.

Then add `.next` to the `.gitignore` file.

To configure nextjs, run
```
npx dendron publish init
```
and then add
```
site:
    assetsPrefix: /{REPO-NAME}
    siteUrl: https://{GITHUB-USERNAME}.github.io[/{Optional subdomain}]
```
to the existing yaml tree in `root-schema.yaml`.

Then you can run `npx dendron publish dev` to ensure the site is working, and finally 
```
npx dendron publish export --target github
```
to build.

If github pages is configured, all you have to do is push the repository!