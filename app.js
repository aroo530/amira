const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

// ...
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const elements = getSymptoms();
    res.render('symptoms', { elements });
  }
  else {
    res.render('login', { error: 'Invalid username or password.' });
  }
});

app.get('/symptoms', (req, res) => {

  res.render('symptoms', { elements });
});

app.post('/submit-symptoms', (req, res) => {
  const { elements } = req.body;
  console.log('elements', elements);
  res.render('disease', { elements });
});

app.get('/disease', (req, res) => {
  res.render('disease');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function getSymptoms() {
  const symptoms = ['Element 1', 'Element 2', 'Element 3']; // Example data
  
  return symptoms;
}

function getDiseases(symptoms) {
  const diseases = ['Disease 1', 'Disease 2', 'Disease 3']; // Example data
  return diseases;
}
