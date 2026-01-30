import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME || "testdb",
  useUnifiedTopology: true,

  synchronize: process.env.NODE_ENV !== "production",
  logging: false,

  entities: [User],
  migrations: [],
  subscribers: [],
});

