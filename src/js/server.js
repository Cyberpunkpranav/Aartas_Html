const express = require('express')
const app = express();
const path = require("path");
const port = 3000;
const https = require('https');
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/', (req, res ) =>  {
    const url = "https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctors";

    https.get(url,function(response){
       let chunks = '';
       response.on('data',function(chunk){
          chunks+=chunk;
         
        })
        response.on('end',function(){
          let data = JSON.parse(chunks);
          for(i=0;i<=data.data.length-1;i++){
          console.log(data.data[i].doctor_name);
          // console.log(data.data);
          }
          res.send();
        })
    })

  })
  


