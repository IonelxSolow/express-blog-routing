const express = require('express');
const app = express();
const PORT = 3000;

const postsRouter = require('./routers/posts');

//define first router
app.get('/', (req, res) => {
    res.send('Welcome to server')
});

//use router for posts
app.use('/posts', postsRouter);

//server listen
app.listen(PORT, ()=>{
    console.log(`Server runing at port http://localhost:${PORT}`);
}); 

