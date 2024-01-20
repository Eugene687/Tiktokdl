const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  if(!!req.query.url) {
	 const link = req.query.url;

	 try {
		const response = await axios.post('https://www.tikwm.com/api/?hd=1', { url: link });
		 console.log(response.data);
		// handle response
		res.send(response.data);
	 } catch (error) {
		// handle error
		console.error(error);
		res.status(500).send('An error occurred');
	 }
  } else {
	 res.status(400).send('Missing url parameter');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
