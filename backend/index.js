const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const getUnits = require('./routes/getUnits.route')

app.use(express.json());
app.use('/units', getUnits);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
