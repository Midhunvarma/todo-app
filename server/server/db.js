const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://midhunvarma:midhun1996@cluster0.ids1ifh.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
