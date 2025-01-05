// Create web server
// http://localhost:3000/comments

// Import express module
const express = require('express');

// Create express application
const app = express();

// Import body-parser module
const bodyParser = require('body-parser');

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create comments array
const comments = [
  {
    id: 1,
    title: 'Comment 1',
    body: 'This is the first comment'
  },
  {
    id: 2,
    title: 'Comment 2',
    body: 'This is the second comment'
  },
  {
    id: 3,
    title: 'Comment 3',
    body: 'This is the third comment'
  }
];

// Create GET route to return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Create PUT route to update a comment
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedComment = req.body;
  comments.forEach((comment, index) => {
    if (comment.id === id) {
      comments[index] = updatedComment;
    }
  });
  res.json(updatedComment);
});

// Create DELETE route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedComment = comments.find(comment => comment.id === id);
  comments.forEach((comment, index) => {
    if (comment.id === id) {
      comments.splice(index, 1);
    }
  });
  res.json(deletedComment);
});

// Set up server to listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});

// Test with Postman
// GET http://localhost:3000/comments
// POST http://localhost:3000/comments
// PUT http://localhost:3000/comments/1
// DELETE http://localhost:3000/comments/1
