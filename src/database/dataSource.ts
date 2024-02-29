// src/database/dataSource.ts
import { DataSource } from "typeorm"
import { Token } from "../entity/Token.entity"

// Define the AppDataSource configuration
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT || '5432'),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    Token
  ],
  migrations: [
    `${__dirname}/database/migration/**/*.ts`
  ],
  logging: false,
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  dropSchema: process.env.TYPEORM_DROP_SCHEMA === 'true',
})
