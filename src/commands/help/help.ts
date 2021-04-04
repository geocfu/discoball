import Discord from 'discord.js';

import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';
import { getCommandNames } from '../../helpers/commands';

const help: Command = {
  name: 'help',
  description: 'Display the Help Page.',

  async execute(message: Discord.Message, args?: string[], client?: Discord.Client) {
    const availableCommands = await getCommandNames();

    const content =
      `:helmet_with_cross: **Help Page** \n` +
      `The list of available commands is: \`${availableCommands.join(', ')}\``;

    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
}

export = help;