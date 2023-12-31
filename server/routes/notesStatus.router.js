const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//PUT to toggle add note function
router.put('/:id', (req, res) => {
    const queryText = `UPDATE "todo" SET "notes_status" = NOT "notes_status" WHERE "id" = $1;`;
    console.log("Req.body:", req.body);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in toggleEdit on notesStatus router:', error);
            res.sendStatus(500);
        });
})

module.exports = router;

//const queryText = `UPDATE "todo" SET "notes" = $2 WHERE "id" = $1;`;