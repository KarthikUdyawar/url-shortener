interface IConfig {
  ENV?: string;
  PORT?: number;
  HOST?: string;
  DB_URI?: string;
  ADMIN_NAME?: string;
  ADMIN_PASSWORD?: string;
  JWT_SECRET?: string;
  ENV_ERROR?: string;
}

export default IConfig;
