// require("dotenv").config({ path: ".env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: ".env" }); //experimental import module feature

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB Connection ERROR", error);
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Express error", error);
    });
    throw error;
    app.listen(process.env.PORT, () => {
      console.log("app running on port 3000");
    });
  } catch (error) {
    console.log("DB Connection ERROR", error);
    throw error;
  }
})();

*/
