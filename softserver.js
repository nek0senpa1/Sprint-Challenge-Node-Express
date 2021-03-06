const express = require('express');
const helmet = require('helmet');

const actionDB = require('./data/helpers/actionModel');
const projectDB = require('./data/helpers/projectModel');

//const db1 = require ('./data/dbConfig');

const softserver = express();

softserver.use(express.json());
softserver.use(helmet());



softserver.get('/', (req,res) => {
    res.send(
        `<h3>They drink a NodeJS drink</h3>
        <h3>They drink a ExpressJS drink</h3>
        `);
});

// Project CRUDs

softserver.get('/project', async (reck, rez) => {
    try{
        console.log(reck);
        const thing = await projectDB.get();
        // reck.id
        // you guys are horrible for this one... how were we supposed to
        // know what . note to use here... this was a guess...

        // Have now realized that I don't need to pass a var to  the
        // get method... but why not?  I don't know, I guess I don't
        // know what that knex function is doing really...
        rez.status(200).json(thing);
    }
    catch (errerz) {
        console.log(errerz);
        rez.status(500).json({
            message: "You ain\n't got nothin... ",
        })
    }
});

// NOW I"M EXPERIMENTING...

softserver.get('/test', (req, res) => {
    actionDB
    .get()
    .then( stuff => {
        res.status(200).json(stuff);
    })
    .catch( random => {
        console.log( random ,'Dang it, Bobby')
    })
})

softserver.get('/test2', (req, res) => {
    projectDB
    .get()
    .then( stuff => {
        res.status(200).json(stuff);
    })
    .catch( random => {
        console.log( random ,'Dang it, Bobby')
    })
})

// DONE EXPERIMENTING...

softserver.post('/project', async (rec, rez) => {
    try{
        const widget = await projectDB.insert(rec.body);
        rez.status(201).json(widget)
    }
    catch{
        rez.status(500).json({ message:'Nope! Shatever you sent in body is wrong!'})
    }
});

softserver.delete('/project/:id', async (rec, rez) => {
    try {
        var widget = await projectDB.remove(rec.params.id);
        if (widget) {
            console.log(widget);
            rez.status(200).json({ message: 'Yup! You Killed It'});
        } 
        else {
            console.log(widget);
            rez.status(404).json({ message: 'Nothing here to kill...'});
        }
        }
        catch{
            rez.status(500).json({ message:'You have goofed really hard if you see this. Try a real id number...'})
        } 
})

softserver.put('/project/:id', async (rec, rez) => {
    try {
        let putPutter = await projectDB.update(rec.params.id, rec.body);
        if (putPutter) {
            rez.status(200).json({message: "Good Job, You updated a Thingy"});
        }
        else {
            rez.status(404).json({message: "NOPE! Not a real ID to update"});
        }
    }
    catch{
        rez.status(500).json({ message:'You have goofed really hard if you see this. Try a real id number...'})
    }
})

// Actions EndP's

softserver.get('/action', async (reck, rez) => {
    try{
        console.log(reck);
        const thing = await actionDB.get(reck.body.id);
        // you guys are REAL horrible for this one... how were we supposed to
        // know what . note to use here... this was ANOTHER 'educated' guess...
        rez.status(200).json(thing);
    }
    catch (errerz) {
        console.log(errerz);
        rez.status(500).json({
            message: "You ain\n't got nothin... ",
        })
    }
});

softserver.post('/action', async (rec, rez) => {
    try{
        const widget = await actionDB.insert(rec.body);
        rez.status(201).json(widget)
    }
    catch{
        rez.status(500).json({ message:'Nope! Shatever you sent in body is wrong!'})
    }
});

softserver.delete('/action/:id', async (rec, rez) => {
    try {
        var widget = await actionDB.remove(rec.params.id);
        if (widget) {
            console.log(widget);
            rez.status(200).json({ message: 'Yup! You Killed It'});
        } 
        else {
            console.log(widget);
            rez.status(404).json({ message: 'Nothing here to kill...'});
        }
        }
        catch{
            rez.status(500).json({ message:'You have goofed really hard if you see this. Try a real id number...'})
        } 
})

softserver.put('/action/:id', async (rec, rez) => {
    try {
        let putPutter = await actionDB.update(rec.params.id, rec.body);
        if (putPutter) {
            rez.status(200).json({message: "Good Job, You updated a Thingy"});
        }
        else {
            rez.status(404).json({message: "NOPE! Not a real ID to update"});
        }
    }
    catch{
        rez.status(500).json({ message:'You have goofed really hard if you see this. Try a real id number...'})
    }
})

// Random skilful guesses are random...

softserver.get('/project/:id/action', async (rec, rez) => {
    try {
        var postCereal = await projectDB.getProjectActions(rec.params.id);
        if (postCereal.length > 0) {
            rez.status(200).json({ postCereal, message: "Hey, good job :)"})
        }
        else {
            rez.status(404).json({message: "Zip Zilch and Nada, try something else"});
        }
    }
    catch {
        rez.status(500).json({ message:'You Fool of a Took !!!'})
    };

})




module.exports = softserver;