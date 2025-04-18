import { connect } from "mongoose";

const url = "mongodb://mongo:27017/docker-node-mongo";

const connectDb = () => {
  connect(url, () => {
    console.log("Connected to MongoDB");
  });
};

export default connectDb;
