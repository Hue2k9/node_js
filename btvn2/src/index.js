const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json()) 
const port = 3000

app.use(morgan('combined'))

const data=[
  {id: 1, name:"Hoang Minh Hue", age: 19, gender:0},
  {id: 2, name:"Truong Ngoc Anh", age: 19, gender:0},
  {id:3, name:"Tran Van Hoang", age:19, gender:1},
];

app.get('/users', (req, res) => {
    res.json(data);
})

app.post('/users',(req, res) => {
   let user = req.body;
   data.push(user);
   res.send("User was added");
   console.log(user);
})

app.put('/users/:id',(req, res) => {
  let user = req.body;
  let {id} = req.params;
  let index = data.findIndex((user) => id == user.id);
  if(index==-1)
    return res.send("User is invalid");
  data[index].name = user.name;
  data[index].age = user.age;
  data[index].gender = user.gender;
  res.send("Update successfull");
})

app.delete('/users/:id',(req,res)=>{
  let {id}=req.params;
  let index=data.findIndex((user)=>id==user.id);
  if(index==-1)
    return res.send("User is invalid");
  data.splice(index,1);
  res.send("User was deleted")
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


