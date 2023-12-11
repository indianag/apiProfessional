const mongoose = require('mongoose');
const cors = require('cors')



mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/miniApp',
                   {useNewUrlParser: false, useUnifiedTopology: false})

.then((db)=> {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error)
})