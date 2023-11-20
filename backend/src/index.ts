import { error } from "console";
import app from "./app.js";
import {connectToDatabase} from "./db/connection.js";

connectToDatabase()
  .then( () => {
  const server = app.listen(5000, "0.0.0.0" , () => {
    console.log(server.address());
    console.log("Listening over network");
    });
})
.catch((err) => console.log(err));

