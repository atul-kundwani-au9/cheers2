const express = require (" express");
const bodyParser = require ("body-parser");
const router = express.Router();

const app = express ();
app.use('/', router);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// get request

router.get('/', (request,response)=>{
response.sendfile("");
})
// post request

router.post('/login', (request,response)=>{
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("user name = "+user_name+", password is "+password);
    response.end("")
});

app.listen(3000,()=>{
    console.log("statrted on Port 3000")
})




