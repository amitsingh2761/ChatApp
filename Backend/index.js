const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r=await axios.put(
      'https://api.chatengine.io/users/',
      {username:username,secret:username,first_name:username},
      {headers:{"private-key":"61c93ce3-5bb9-4ada-a904-c730d319ec31"},}
    )
return res.status(r.status).json(r.data);
  } catch (error) {
return res.status(error.response.status).json(error.response.data);
    
  }
 
});

app.listen(3030);
console.log("connection Successful");

//
// b170e07d-f427-4a97-92e7-60e31c3577bf

// 61c93ce3-5bb9-4ada-a904-c730d319ec31