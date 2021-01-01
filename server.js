const App = require('./app');
const port = 7070;

App.listen(port, () =>{
    console.log(`Hardware web layer api is listening on port ${port}`)
})
