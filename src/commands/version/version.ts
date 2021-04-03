import Discord from 'discord.js';

import { Config } from '../../config';

import { replyAsMultilineBlockQuote } from '../../helpers/replies';

export class Version {
  public static readonly command: string = 'version';
  public static readonly description: string = 'Dsiplay current running Bot info';

  public static execute(message: Discord.Message, client: Discord.Client): Promise<Discord.Message> {
    const initCommand = Config.prefix + Config.callsign;

    //axios call to https://api.github.com/repos/geocfu/diskompala/releases/latest

    const content =
      `:clock3: Current running version is, vTODO\n\n` +
      `For a list of all the available commands use \`${initCommand} help\`.\n`;

    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
};
