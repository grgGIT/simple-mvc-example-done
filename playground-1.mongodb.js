/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the dogs collection.
db.getCollection('dogs').insertMany([
  { name: 'Buddy', breed: 'Golden Retriever', age: 3, createdDate: new Date('2021-01-01T08:00:00Z') },
  { name: 'Max', breed: 'Bulldog', age: 5, createdDate: new Date('2021-02-01T09:00:00Z') },
  { name: 'Bella', breed: 'Poodle', age: 2, createdDate: new Date('2021-03-15T09:00:00Z') },
]);

// Insert a few documents into the cats collection.
db.getCollection('cats').insertMany([
  { name: 'Whiskers', bedsOwned: 2, createdDate: new Date('2021-01-01T08:00:00Z') },
  { name: 'Shadow', bedsOwned: 3, createdDate: new Date('2021-02-01T09:00:00Z') },
  { name: 'Luna', bedsOwned: 1, createdDate: new Date('2021-03-15T09:00:00Z') },
]);

// Run a find command to view the most recently added dog.
const recentDog = db.getCollection('dogs').find({}, {}, { 
  sort: {'createdDate': 'descending'}
}).limit(1).toArray();

// Print the most recent dog's name to the output window.
if (recentDog.length > 0) {
  console.log(`Most recent dog: ${recentDog[0].name}`);
}

// Run an aggregation to find the total number of beds owned by cats.
const totalBeds = db.getCollection('cats').aggregate([
  { $group: { _id: null, totalBeds: { $sum: '$bedsOwned' } } }
]).toArray();

// Print the total number of beds owned by cats.
if (totalBeds.length > 0) {
  console.log(`Total beds owned by cats: ${totalBeds[0].totalBeds}`);
}