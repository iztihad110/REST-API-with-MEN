let {app} = require("./app");
let port = 3000;

app.listen(port, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
})