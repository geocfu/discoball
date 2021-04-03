import Discord from 'discord.js';
import { getAvailableCommands } from '../../helpers/commands';

import { replyAsMultilineBlockQuote } from '../../helpers/replies';

export class Help {
  public static readonly command: string = 'help';
  public static readonly description: string = 'Display the Help Page.';

  public static async execute(message: Discord.Message, args?: string[]) {
    const content =
      `:helmet_with_cross: **Help Page** \n` +
      `The list of available commands is: \`${await getAvailableCommands()}\``;

    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
};
