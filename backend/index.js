// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// // import userRoute from "./route/Login.route.js";
// const app = express();
// dotenv.config();

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;
// //connect to MongoDB
// try {
//   await mongoose.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000 
//   });
//   console.log("Connected to mongoDB");


// // defining routes
// // app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
// } catch (error) {
//   console.log('Error: ', error);
// }

// // app.listen(PORT, () => {
// //   console.log(`Example app listening on port ${PORT}`)
// // })

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000
    });
    console.log('Connected to MongoDB');
    
    // Define routes here
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

connectDB();
