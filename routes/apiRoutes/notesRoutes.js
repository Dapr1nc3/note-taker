const router = require('express').Router();
const { data } = require('../../db/db.json');
const { filterByQuery, createNewNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let results = data;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  module.exports = router;