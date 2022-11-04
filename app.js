const http = require('http');
const express = require('express');
const PORT = 4000

const app = express();
var cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({credentials:true, origin:true}));

app.get('/', (req,res) => {
    res.send({
        "slackUsername": "Achu Agbama",
        "backend": false,
        "age": 21,
        "bio": "Achu Agbama is a Software Developer at 525 system, a software developemnt company. He has over 2 years experience in frontend and mobile develoment using technologies such as vue and flutter. He is currently learning node js and express. "
    })
})
app.post('/', (req,res) => {

    var operation_type = String(req.body.operation_type)
    var x = Number(req.body.x);
    var y = Number(req.body.y);

  
    if (operation_type === "addition") {
      var result = x + y;
    }
    if (operation_type === "subtraction") {
      var result = x - y;
    }
    if (operation_type === "multiplication") {
      var result = x * y;
    }
    else if (operation_type === "division") {
      var result = x / y;
    }
    
      
  
     res.status(201).send({
          "slackUsername": "Achufam24",
          "operation_type": operation_type,
          "result":result
      })
  //   res.send("Addition - " + result);
  })

app.listen(PORT, () => {
    console.log('listening for requests at PORT', PORT);
});

