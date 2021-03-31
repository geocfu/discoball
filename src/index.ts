import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(process.env.token);