const { default: mongoose } = require("mongoose");
const url =
  "mongodb+srv://vizztechnology:aKTTa1GyQEdyfiIA@cluster0.fd7gvvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
  //   console.log(process.env.MONGO_URL);
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then((res) => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

module.exports = connectToMongo;
