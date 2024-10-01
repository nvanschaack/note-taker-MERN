const express = require('express')
const app = express()
const routes = require('./routes')
const path =  require('path')

//define port
const PORT = 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/dist')))
} 

app.use(routes);

app.listen(PORT, ()=>{
    console.log('server is running on port 3001');
})