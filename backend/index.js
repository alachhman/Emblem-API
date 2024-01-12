const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;
const getUnits = require('./routes/getUnits.route')
const status = require('./routes/status.route')

app.use(express.json());
app.use('/units', getUnits);
app.use('/status', status);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
