const express = require('express');
const app = express();
const PORT = 3000;

//in the browser http://localhost:3000/user/23

app.get("/user/:id", (req, res) => {
   const userId = req.params.id;
   res.send(`User id is ${userId}`);
});

app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});  