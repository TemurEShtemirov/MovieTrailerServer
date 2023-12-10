import { Sequelize } from "sequelize";
import 'dotenv/config'

const db_name = process.env.DB_NAME | "movie";
const db_pass = process.env.

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')