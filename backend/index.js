import  express from "express"
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js"
import cors from "cors"
// import userRoute from "./route/user.route.js"
import userRoute from './route/user.route.js';

const app = express()
app.use(cors());
app.use(express.json());
const port = 3000
const url = "mongodb://localhost:27017/"

try{
mongoose.connect(url,{
  useNewUrlParser : true,
  useUnifiedTopology : true
})
 
      console.log("connected to mongodb!");
  } catch(error){
    console.log("error :", error)
  }

  //defining routes
  app.use("/book", bookRoute);
  app.use("/user", userRoute)
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});