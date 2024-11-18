const express = require('express');
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use((req, res, next) =>{
   console.log(`This works first`);
   next();
});

app.get('/', (req, res) =>{
 console.log("This works second");
});

app.get("/user/:id", (req, res) => {
   const userId = req.params.id;
   res.send(`User id is ${userId}`);
});

app.get('/search', (req, res) =>{
  const query = req.query.q;
  res.send(`The query search term is ${query}`);
});

app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});  