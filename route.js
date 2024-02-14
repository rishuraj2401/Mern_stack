
// In Express.js, the app.route() method is used to create a chainable route handler for a specific route path. 
// It allows you to define multiple HTTP methods on a single route. This can make your code more organized and concise, especially when dealing with a specific resource.
const express = require('express');
const app = express();

// Using app.route() for '/users' route
app.route('/users')
  .get((req, res) => {
    res.send('Get a list of users');
  })
  .post((req, res) => {
    res.send('Create a new user');
  })
  .put((req, res) => {
    res.send('Update users');
  });

// Using app.route() for '/users/:userId' route
app.route('/users/:userId')
  .get((req, res) => {
    const userId = req.params.userId;
    res.send(`Get user with ID ${userId}`);
  })
  .put((req, res) => {
    const userId = req.params.userId;
    res.send(`Update user with ID ${userId}`);
  })
  .delete((req, res) => {
    const userId = req.params.userId;
    res.send(`Delete user with ID ${userId}`);
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
