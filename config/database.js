const mongoose = require("mongoose");
//connect db
module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONG0_URL);
    console.log("connect success !");
  } catch (error) {
    console.log("connect error !");
  }
};
