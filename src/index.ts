import * as dotenv from 'dotenv'

import { StatusBot } from './statusBot';

dotenv.config();

function bootstrap(): void {
  const statusBot = new StatusBot()
  statusBot.init();
}

bootstrap();