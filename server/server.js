const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
})