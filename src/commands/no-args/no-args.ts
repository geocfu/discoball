import Discord from 'discord.js';

import { Config } from '../../config';
import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const noArgs: Command = {
  name: 'no-args',
  description: 'Default no argument response.',

  async execute(message: Discord.Message, args?: string[], client?: Discord.Client) {
    const initCommand = Config.prefix + Config.callsign;
    const sender = `<@${message.author.id}>`;

    const content =
      `:wave: Hello ${sender}, I am **${client.user.username}**.\n\n` +
      `I am a :musical_note: **music** Bot that plays music for you and your friends :tada:.\n\n` +
      `You can deploy me to work right away by calling me from within a **Voice Room** ` +
      `by using one of the avaible commands.\n\n` +
      `For a list of all the available commands use \`${initCommand} help\`.\n`;

    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
}

export = noArgs;