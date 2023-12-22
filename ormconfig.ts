import { DataSourceOptions } from 'typeorm';
const configs: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'your_username',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_DATABASE || 'your_database_name',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export = configs;
