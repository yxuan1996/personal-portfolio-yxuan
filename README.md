# personal-portfolio-yxuan
Personal Portfolio Website

##  Deploying to personal github pages
Install gh-pages dependency
```
npm install gh-pages --save-dev
```

Configure vite.config.js
```
export default {
  base: "/",
};
```

Update package.json
```
"homepage": "https://<your-username>.github.io"
```

Build and Deploy
```
npm run deploy
```
