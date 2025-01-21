const express = require('express');
const app = express();

const articleRouter = require("./routes/article");
app.use("/article", articleRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
