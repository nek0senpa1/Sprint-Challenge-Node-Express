const express = require('express');
const helmet = require('helmet');

//const userDB = require('./data/helpers/actionModel');
//const postDB = require('./data/helpers/projectModel');

const softserver = express();

softserver.use(express.json());
softserver.use(helmet());


softserver.get('/', (req,res) => {
    res.send(
        `<h3>They drink a NodeJS drink</h3>
        <h3>The drink a ExpressJS drink</h3>
        `);
});


module.exports = softserver;