const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 80; // Port number can be any available port

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});