import Discord from 'discord.js';

import { Config } from './config';

import { Command } from './types/Command';
import { loadCommands } from './helpers/commands';

const client = new Discord.Client();
const commands = new Discord.Collection<string, Command>();

client.once('ready', async () => {
  console.log('Initializing...');

  const availableCommands = await loadCommands();
  for (const _command of availableCommands) {
    commands.set(_command.name, _command);
  }

  console.log('Ready!');
});

client.on('shardError', error => {
  console.error('A websocket connection encountered an error:', error);
  throw error;
});

client.on('error', (error) => {
  console.error('Encountered an error:', error);
  throw error;
});

client.on('message', handleMessage);

async function handleMessage(message: Discord.Message): Promise<Discord.Message> {
  // Our prefix and callsign
  const initCommand = Config.prefix + Config.callsign;

  // Without initCommand, the user simply did not summon the Bot
  if (!message.content.startsWith(initCommand) || message.author.bot) return;

  // The array of user provided arguments
  const args: string[] = message.content.slice(initCommand.length).trim().split(/ +/);

  // If not command was given, return default response
  if (args[0] === '') return commands.get('no-args').execute(message, undefined, client);

  // The command the user input. (e.x. !disco play OR !disco version)
  // 
  // NOTE: this does not include the args for the given comand, only the command itself
  // is being parsed here
  const command = args.shift().toLowerCase();

  try {
    return commands.get(command).execute(message, args, client);
  } catch (error) {
    throw error;
  }
}

client.login(Config.token);