import Discord from 'discord.js';

import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const stop: Command = {
  name: 'stop',
  description: 'Stop the playback and leave the voice channel',
  cooldown: 5,

  async execute(message: Discord.Message, args?: string[], client?: Discord.Client) {
    const sender = `<@${message.author.id}>`;

    if (message.member.voice.channel) {
      // const connection = await message.member.voice.channel.join();
      return message.reply('WIP');
    } else {
      message.reply('You need to join a voice channel first!');
    }


    // const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send('');
  }
}

export = stop;
