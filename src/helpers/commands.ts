import fs from 'graceful-fs';
import path from 'path';
import { Command } from '../types/Command';

export async function loadCommands(): Promise<Command[]> {
  try {
    const commandFiles = await traverseCommandsDir();

    return commandFiles;
  } catch (error) {
    throw error;
  }
}

export async function getCommandNames(): Promise<string[]> {
  try {
    const commandNames: string[] = [];
    const commandFiles = await traverseCommandsDir();

    for (const _commandFile of commandFiles) {
      commandNames.push(_commandFile.name);
    }

    return commandNames;
  } catch (error) {
    throw error;
  }
}

async function traverseCommandsDir(): Promise<Command[]> {
  try {
    const commandFiles: Command[] = [];

    const folders = await fs.promises
      .readdir(path.join(__dirname, '../', 'commands'))
      .then((folders) => folders.filter(folder => !folder.endsWith('.ts')));

    for (const _folder of folders) {
      const files = await fs.promises
        .readdir(path.join(__dirname, '../', 'commands', _folder))
        .then((files) => files.filter(file => file.endsWith('.ts')));

      for (const _file of files) {
        // const command = await import(`../commands/${_folder}/${_file}`) as Command;
        const command = require(`../commands/${_folder}/${_file}`) as Command;
        commandFiles.push(command);
      }
    }

    return commandFiles;
  } catch (error) {
    throw error;
  }
}