const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://fernandocpagani:LQUhzIt6wx4i6CR7@cluster0.1s12dlu.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
