import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

dotenv.config();

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan("tiny"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

server.use(limiter);

server.use("/", (req, res) => {
  res.json({ message: "HELLO WORLD!" });
});

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on ${process.env.BASE_URL}`);
});
