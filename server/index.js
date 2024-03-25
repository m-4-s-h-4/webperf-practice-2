const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(compression());

app.post('/submit-reservation', (req, res) => {
  const reservationData = `${JSON.stringify(req.body)}\n`;
  fs.appendFile('reservations.txt', reservationData, (err) => {
    if (err) {
      console.error('Failed:', err);
      return res.status(500).send('Failed');
    }
    res.send('Reservation saved successfully to reservatiosn.');
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
