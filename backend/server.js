const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors=require('cors');
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error: ' + err));
app.use(cors());
