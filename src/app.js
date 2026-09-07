const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const submissionRoutes = require('./routes/submit.routes');
const outputRoutes = require('./routes/output.routes');
const adminRoutes = require('./routes/admin.routes');


const app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/' , (req, res) => {
     res.send('server is ready')
});

app.use('/api/auth', authRoutes);

app.use('/api', submissionRoutes);

app.use('/api', outputRoutes);

app.use('/api', adminRoutes);

module.exports = app 