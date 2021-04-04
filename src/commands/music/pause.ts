import Discord from 'discord.js';

import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const pause: Command = {
  name: 'pause',
  description: 'Pause the music playback.',
  cooldown: 5,

  async execute(message: Discord.Message, args: string[]) {
    const sender = `<@${message.author.id}>`;

    if (message.member.voice.channel) {
      // const connection = await message.member.voice.channel.join();
      return message.reply('WIP');
    } else {
      return message.reply('You need to join a voice channel first!');
      // return message.channel.send();
    }


    // const reply = replyAsMultilineBlockQuote(content);

    // return message.channel.send(reply);
  }
}

export = pause;