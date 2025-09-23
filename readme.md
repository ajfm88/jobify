#### Local Build

- remove default values from inputs in Register and Login
- navigate to client and build front-end

```sh
cd client && npm run build
```

- copy/paste all the files/folders

  - from client/dist
  - to server(root)/public

- in server.js point to index.html

```js
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});
```

#### Deploy On Render

[Render](https://render.com/)

- sign up of for account
- create git repository
