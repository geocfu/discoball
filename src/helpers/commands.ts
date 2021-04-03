import fs from 'graceful-fs';

export async function getAvailableCommands(): Promise<string[]> {
  const commands: string[] = [];

  try {
    const commandFolders = await fs.promises
      .readdir('./src/commands')
      .then((folders) => folders.filter(folder => !folder.endsWith('.ts')));

    for (const _folder of commandFolders) {
      const commandFiles = await fs.promises
        .readdir(`./src/commands/${_folder}`)
        .then((files) => files.filter(file => file.endsWith('.ts') && !file.includes('no-args')));

      for (const _file of commandFiles) {
        const command = _file.toLowerCase().slice(0, -3);
        commands.push(command);
      }
    }

  } catch (error) {
    throw error;
  }

  return commands;
}