// src/utils/load-env.ts
import { config } from 'dotenv';
import path from 'path';

// No need for fileURLToPath if you're in CommonJS now
const envPath = path.resolve(__dirname, '../../.env');
config({ path: envPath });
