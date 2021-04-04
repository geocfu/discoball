import Discord from 'discord.js';
import axios from 'axios';

import { Config } from '../../config';
import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';
import { Gihub } from '../../types/gihub/Gihub';

const version: Command = {
  name: 'version',
  description: 'Display current running Bot version',
  cooldown: 10,

  async execute(message: Discord.Message) {
    try {
      const initCommand = Config.prefix + Config.callsign;

      const lattestVersion = await axios.get<Gihub>('https://api.github.com/repos/geocfu/diskompala/releases/latest');
      console.log(lattestVersion);

      const content =
        `:clock3: Current running version is, vTODO\n\n` +
        `For a list of all the available commands use \`${initCommand} help\`.\n`;

      const reply = replyAsMultilineBlockQuote(content);

      return message.channel.send(reply);

    } catch (error) {
      throw error;
    }
  }
}

export = version;