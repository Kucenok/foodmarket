const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const MONGO_URI = 'mongodb+srv://katyaswan:12345687@cluster0.zhujsgp.mongodb.net/foodreg?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Запуск сервера
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/api/auth/test-direct', (req, res) => {
    res.send('Direct test route is working');
});
