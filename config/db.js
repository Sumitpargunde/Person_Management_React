const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pargundesunit95:zmxKogyUFsCLpuIv@restfulmogonode.bvmbf.mongodb.net/?retryWrites=true&w=majority&appName=RestfulMogoNode", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
