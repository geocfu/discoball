import Discord from 'discord.js';
import { Config } from './config';

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async message => {
  //"You summoned me wrongly! Try calling me by using my prefix. (a.k.a '?')"
  if (!message.content.startsWith(Config.prefix) || message.author.bot) return;

  const args = message.content.slice(Config.prefix.length).trim().split(/ +/);

  if (!args.length) return;

  const command = args.shift().toLowerCase();

  // based on command, respond accordingly
});

client.login(Config.token);
