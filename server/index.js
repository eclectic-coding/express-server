import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useCreateIndex: true
});

// Middleware
app.use(express.json());
app.use(cors());

// const user = new User({
//   name: 'Pete',
//   email: 'test@test.com',
//   password: 'ccs43300'
// });
//
// (async () => {
//   try {
//     const doc = await user.save();
//     console.log('Saved User.');
//   } catch (e) {
//     console.log('Error: ', e);
//
// })();

// Routes
app.use('/users', require('./routes/users'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

