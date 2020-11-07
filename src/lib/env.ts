import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
  PEXELS_API_URL: str(),
});

export default env;
