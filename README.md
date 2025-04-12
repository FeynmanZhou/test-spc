# New HiTalker Landing Page

新版本的 HiTalker Landing Page,需要修改的内容可以添加 issues

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## 2). Build docker image
Usage:
```shell
docker build . -t ZCareersContainerRegistry.azurecr.io/hitalker-welcome:v20241104
docker push ZCareersContainerRegistry.azurecr.io/hitalker-welcome:v20241104
``` 
if need login, using
```shell
az login
```
or 
```shell
docker login ZCareersContainerRegistry.azurecr.io --username ZCareersContainerRegistry --password $password
```

 
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Good Luck
