import Discord from 'discord.js';
import axios from 'axios';

import { Config } from '../../config';

import { Command } from '../../types/Command';
import { GitHub } from '../../types/github/GitHub';

import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const version: Command = {
  name: 'version',
  description: 'Display current running Bot version',
  cooldown: 10,

  async execute(message: Discord.Message) {
    try {
      const initCommand = Config.prefix + Config.callsign;

      const lattestVersion = await axios.get<GitHub[]>('https://api.github.com/repos/geocfu/discoball/releases',
        {
          headers: {
            Accept: 'application/vnd.github.v3+json"'
          }
        }
      ).then(({ data }) => data[0]);

      const content =
        `:clock3: V${lattestVersion.tag_name}\n` +
        `:wrench: ${lattestVersion.prerelease ? 'Pre-Release' : 'Lattest Release'} \n\n` +
        `For a list of all the available commands use \`${initCommand} help\`.`;

      const reply = replyAsMultilineBlockQuote(content);

      message.suppressEmbeds(true);
      return message.channel.send(reply);

    } catch (error) {
      throw error;
    }
  }
}

export = version;