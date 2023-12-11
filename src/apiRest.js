const app = require('./app')
require('./database');
const cors = require('cors')



app.listen(app.get("port"), function()
{
    console.log("server listen on port " + app.get("port"))
})