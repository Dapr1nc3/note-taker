const fs = require('fs');
const path = require('path');


function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
      if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
      } else {
        personalityTraitsArray = query.personalityTraits;
      }
      console.log(personalityTraitsArray);
      personalityTraitsArray.forEach(trait => {
        filteredResults = filteredResults.filter(
          animal => animal.personalityTraits.indexOf(trait) !== -1
        );
      });
    }
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }


  function createNewNote(body, notesArray) {
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ animalsArray }, null, 2)
    );
    return animal;
  }

  module.exports = {
      createNewNote, filterByQuery
  }