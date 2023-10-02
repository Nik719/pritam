const express =  require('express')
const { Client } = require('pg')
const cors = require('cors'); 

const app =express()

app.use(express.json()) 


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
} 

app.use(cors()); 

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'email',
  password: 'postgrepswd',
  port: 5432,
})


app.post("/user_reponse",(req,res)=>{
    const {name , email , message} = req.body 
    const sql = `INSERT INTO user_response(name, email, message) VALUES ($1, $2, $3) RETURNING id`
    const values = [name, email, message]
    client.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.status(200).json({message:` id:${result.rows[0].id} was created`})
    })
    
})


client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3000 , ()=> {
    console.log("Server is running on port 3000")
})