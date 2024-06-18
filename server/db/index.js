import mongoose from 'mongoose'

const connectToDb = async () => {
    try {
      const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
        autoIndex: true
      });
      console.log('MongoDB is connected');
      return connectionInstance;
    } catch (error) {
      console.error('Error while connecting to MongoDB:', error);
      throw error; // Re-throw the error to be caught in the startServer function
    }
  };

  export default connectToDb