const express = require('express');
const fileRoutes = require('./routes/fileProcessor.routes');

const app = express();

app.use('/api', fileRoutes);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
