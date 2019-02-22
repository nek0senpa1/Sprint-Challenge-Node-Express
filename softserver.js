const express = require('express');
const helmet = require('helmet');

const actionsDB = require('./data/helpers/actionModel');
const projectDB = require('./data/helpers/projectModel');

const db1 = require ('./data/dbConfig');

const softserver = express();

softserver.use(express.json());
softserver.use(helmet());



softserver.get('/', (req,res) => {
    res.send(
        `<h3>They drink a NodeJS drink</h3>
        <h3>They drink a ExpressJS drink</h3>
        `);
});


module.exports = softserver;