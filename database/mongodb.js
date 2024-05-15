const { default: mongoose } = require("mongoose");
const url = process.env.MONGO_URL

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
