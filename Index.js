// Application Run
const app = require('./App')
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// Start your Express server
const port = process.env.RUNNING_PORT || 3000;
app.listen(port,function(){
    console.log(`Server running on port ${port}`);
});