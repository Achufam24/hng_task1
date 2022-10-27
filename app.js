const http = require('http');
const express = require('express');
const PORT = 4000

const app = express();

app.get('/', (req,res) => {
    res.send({
        "slackUsername": "Achu Agbama",
        "backend": false,
        "age": 21,
        "bio": "Achu Agbama is a Software Developer at 525 system, a software developemnt company. He has over 2 years experience in frontend and mobile develoment using technologies such as vue and flutter. He is currently learning node js and express. "
    })
})

app.listen(PORT, () => {
    console.log('listening for requests at PORT', PORT);
});

