import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Route files
import userRoutes from './routes/users';
import surveyRoutes from './routes/surveys';



const app = express();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useCreateIndex: true
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/', userRoutes);
app.use('/api/surveys', surveyRoutes);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

