// index.ts
import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "../database/dataSource";
import app from './app';

// Set the port for the server
const port = process.env.APP_PORT || 3000;

// Initialize the data source
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
