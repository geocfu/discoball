import dotenv from 'dotenv';
import * as env from 'env-var'

const enviroment = dotenv.config();

if (enviroment.error) throw enviroment.error;

export class Config {
  public static readonly token = env.get('TOKEN').required().asString();

  public static readonly prefix = env.get('PREFIX').required().asString();
}