const express = require('express');
const axios = require('axios');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
const api = "f1RxUC7UJfj15dyuH4OKFqhO05j3njbp-RSssC_fKgs";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'))


app.get('/:name', async (req, res) => {
  try {
  const query = req.params.name;
  const resp1 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=1&query=${query}`)
  const resp2 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=2&query=${query}`)
  const phl = resp1.data.results.concat(resp2.data.results);
  res.render("index.ejs",{
  imgl:phl,
  alternative:""
  })
  
  } catch (error) {
  console.error("error fetching data", error.message);
  res.status(500).send("failed to fetch data");
  }
})

app.get('/', async (req, res) => {
  try {
  // res.body.home="Welcome to Home Page";
  const query = req.params.name;
  const resp1 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=1&query=${query}`)
  const resp2 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=2&query=${query}`)
  const phl = resp1.data.results.concat(resp2.data.results);
  res.render("index.ejs",{
  imgl:phl,
  alternative:""
  })
  } catch (error) {
  console.error("error fetching data", error.message);
  res.status(500).send("failed to fetch data");
  }
})

app.post('/search', async (req, res) => {
  try {
  const query = req.body.query;
  const resp1 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=1&query=${query}`)
  const resp2 = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api}&page=2&query=${query}`)
  const phl = resp1.data.results.concat(resp2.data.results);
  res.render("index.ejs",{
  imgl:phl,
  alternative:""
  })
  } catch (error) {
  console.error("error fetching data", error.message);
  res.status(500).send("failed to fetch data");
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
































// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const path = require('path')
// const api = "f1RxUC7UJfj15dyuH4OKFqhO05j3njbp-RSssC_fKgs";
// app.use(express.static('public'));


// app.get('/', async(req, res) => {
//   try {
//     const query = req.params.name;
//     console.log(query);
//     const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${api_key}&page=1&query=${query}`);
//     const photo_list = response.data.results;
//     const cover = response.data.results[0].urls.regular;
//     console.log(response.data.results[0].urls.regular);
//     res.render("index.html",{
//         photo_array:photo_list,
//         image:cover,
//         alternative:""
//     })
//   }
//   catch(error){
//     console.error("failed to make request",error.message);
//     res.status(500).send("failed to fetch data");
//   }
// })



// app.listen(port, () => {
//   console.log(`server app listening on port ${port}`);
// })