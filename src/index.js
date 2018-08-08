import express from 'express';
import bodyParser from 'body-parser';
import config from './config'

const app = express()


app.get('/',(req,res)=>{
    res.send(`DB: ${config.db.db}`)
})


app.use(bodyParser.json())


app.listen(config.PORT,err =>{
    if(err){
        console.log(err)
    }else{
        console.log(`Started at http://localhost:${config.PORT}`)
    }
})