const express = require('express')
const app = express()

//define port
const PORT = 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(routes);

app.listen(PORT, ()=>{
    console.log('server is running on port 3001');
})