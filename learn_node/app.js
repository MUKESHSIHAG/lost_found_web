console.log("starting app")

const fs = require('fs');
var _ = require('lodash')

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if(command == 'add'){
   console.log('Adding new note ')
}else if(command == 'list'){
   console.log('Listing all notes ')
}else {
  console.log('Noot Found ');
}

//const res = notes.addNote()
//console.log(res)
//var sum = notes.add(7,-8);
//console.log(sum)

//fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age} years old`);


