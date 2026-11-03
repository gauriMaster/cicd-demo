const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello from my CI/CD pipeline!'));
module.exports = app;
if (require.main === module) {
 app.listen(port, () => console.log(`Running on ${port}`));
}
