const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/getCurrencies',async (req,res)=>{
    try{
        const response = await axios.get('https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=54c3455b70e64a808d24be02c10d8e5e');

        res.json(response.data);
        console.log(Response.data);
    }catch(err){
        console.log(err);
    }
})
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
})