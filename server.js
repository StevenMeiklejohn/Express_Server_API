const express = require('express');
const app = express();
const cors = require('cors');


let dataResponse = []



app.use(express.json());
app.use(cors());

fetch('https://www.giantbomb.com/api/releases/?api_key=111f60cc8f8d40843b001a9080bfad45ef311981&format=json')
.then(res => res.json())
.then(data => dataResponse = data)

app.get('/', (req, res) => {
    res.json(dataResponse);
  });

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});