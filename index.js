// // implement your API here

 //import express from 'express' // ES6 module synstax
 const express = require('express'); // CommonJS modules 

 const Users = require ('./data/db.js'); // our users database library
 
 
 const server = express();
 // routes or endpoints
 
 //middleware; teaches express new things
 server.use(express.json()); // needed to parse JSON
 
 
 // GET to "/" 
 server.get("/", function (request,response){
 response.send({hello: 'Web developer' });
 });
 
 // see a list  of users
 server.get('/api/users', (request,response) => {
 // read the data from the database (users)
 Users.find() //returns a promise 
 .then(users => {
     console.log('Users', user);
     response.status(200).json(users);
 })
 .catch(error => {
     console.log(error); // example
     //handle the error
     response.status(500).json({
        errorMessage: "The users information could not be retrieved." ,
     }); 
  });
 
 });


  // GET to "/" 
  server.get("/api/users/:id", function (request,response){
    response.send({hello: 'Web developer' });
    });
    
    // see a list  of users
    server.get('/api/users/:id', (request,response) => {

    // read the data from the database (users)
    Users.findById() //returns a promise 
    .then(users => {
        console.log('Users', user);
        response.status(200).json(users);
    })
    .catch(error => {
        console.log(error); // example

        //handle the error
        response.status(404).json({
            message: "The user with the specified ID does not exist." ,
        }); 
     });
    
    });

    
 
 //create a Hub // POST
 server.post('/api/users', (request,response) => {
     const userData = request.body; // for this to work you need the server.use(express.json()); above
 
     //never trust the client, validate the data. for now we trust the data for the demo
     users.insert(userData)
     .then(users => {
         response.status(201).json(users);
     })
     .catch(error => {
         console.log(error); 

      // handle the error 
      response.status(400).json({
         errorMessage: "Please provide name and bio for the user." 
     }); 
  });
 
 });
 
 
 //delete a user
 server.remove('/api/users/:id', (request, response) => {
     const id = request.params.id;
     users.remove(id)
       .then(remove => {
         // res.status(204).end();
         res.status(200).json(remove);
       })
       .catch(error => {
         console.log(error);
         // handle the error
         response.status(404).json({
            message: "The user with the specified ID does not exist." ,
         });
       });
   });
 
 //update a users; extra exercise // PUT
 
     server.put('/api/users/:id', (request, response) => {
         const id = request.params.id;
         users.update(id)
         .then(update=> {

             //response.status(204).end();
             response.status(200).json(update);
         })
         .catch(error => {
             console.log(error);

             // handle the error
             response.status(404).json({
                message: "The user with the specified ID does not exist." ,
             });
         });
     });
 
 
 
 
 const port = 8000;
 server.listen(port, () => console.log(`\n ** api on port:${port} **`));
 
//  fork, clone, type: 'npm i' to get dependencies
//  type: 'npm i' express  to install the express library
//  to run the server type 'npm run server' to