import Discord from 'discord.js';
import fs from 'graceful-fs';

import { Config } from './config';
import { commands } from './commands';

const client = new Discord.Client();

client.login(Config.token);

client.once('ready', () => {
  console.log('Ready!');
});

client.on('shardError', error => {
  console.error('A websocket connection encountered an error:', error);
});

client.on('error', (error) => {
  throw error;
});

client.on('message', handleMessage);

async function handleMessage(message: Discord.Message): Promise<Discord.Message | void> {
  const initCommand = Config.prefix + Config.callsign;

  if (!message.content.startsWith(initCommand) || message.author.bot) return;

  const args: string[] = message.content.slice(initCommand.length).trim().split(/ +/);

  console.log("ARGS", args);

  const command = args.shift().toLowerCase();

  switch (command) {
    case 'help':
      commands.Help.execute(message);
      break;
    case 'play':
      commands.Play.execute(message, args);
      break;
    case 'queue':
      break;
    case 'version':
      commands.Version.execute(message, client);
      break;

    default:
      commands.NoArgs.execute(message, client);
      break;
  }

}
