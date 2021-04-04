import fs from 'graceful-fs';
import { Command } from '../types/Command';

export async function loadCommands(): Promise<Command[]> {
  const commands: Command[] = [];

  try {
    const commandFolders = await fs.promises
      .readdir('./src/commands')
      .then((folders) => folders.filter(folder => !folder.endsWith('.ts')));

    for (const _folder of commandFolders) {
      const commandFiles = await fs.promises
        .readdir(`./src/commands/${_folder}`)
        .then((files) => files.filter(file => file.endsWith('.ts')));

      for (const _file of commandFiles) {
        const command = await import(`../commands/${_folder}/${_file}`) as Command;
        commands.push(command);
      }
    }

  } catch (error) {
    throw error;
  }

  return commands;
}

export async function getCommandNames(): Promise<string[]> {
  const commandNames: string[] = [];

  try {
    const commandFolders = await fs.promises
      .readdir('./src/commands')
      .then((folders) => folders.filter(folder => !folder.endsWith('.ts')));

    for (const _folder of commandFolders) {
      const commandFiles = await fs.promises
        .readdir(`./src/commands/${_folder}`)
        .then((files) => files.filter(file => file.endsWith('.ts') && file !== 'no-args.ts' && file !== 'uknown-args.ts'));

      for (const _file of commandFiles) {
        const command = await import(`../commands/${_folder}/${_file}`) as Command;
        commandNames.push(command.name);
      }
    }

  } catch (error) {
    throw error;
  }

  return commandNames;
}