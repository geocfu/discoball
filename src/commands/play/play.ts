import Discord from 'discord.js';

import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const play: Command = {
  name: 'play',
  description: 'Play a song from the givven URL.',
  cooldown: 5,

  async execute(message: Discord.Message, args: string[]) {
    const sender = `<@${message.author.id}>`;

    const content = `i am not yet ready, hehehe`;
    console.log(args);


    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
}

export = play;