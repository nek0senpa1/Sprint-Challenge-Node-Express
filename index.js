// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

require('dotenv').config();


const normalserver = require ('./softserver.js');


const portyMcPortFace = process.env.PORT || 5000;

normalserver.listen(portyMcPortFace, ( ) => {
    console.log(`I get knocked down, but I'm checking port ${portyMcPortFace} AGAIN!`)
})