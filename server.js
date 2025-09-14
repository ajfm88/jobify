import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import authRouter from "./routers/authRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";

app.use("/api/v1/users", authenticateUser, userRouter);

app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.use("/api/v1/auth", authRouter);

app.use(errorHandlerMiddleware);

// routers
// import jobRouter from "./routers/jobRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post(
  "/api/v1/test",
  [body("name").notEmpty().withMessage("name is required")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ msg: `hello ${name}` });
  }
);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
