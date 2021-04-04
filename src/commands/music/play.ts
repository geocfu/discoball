import Discord from 'discord.js';
import ytdl from 'ytdl-core';
import fs from 'graceful-fs';

import { Command } from '../../types/Command';
import { replyAsMultilineBlockQuote } from '../../helpers/replies';

const play: Command = {
  name: 'play',
  description: 'Start a music playback from the given URL(s).',
  cooldown: 5,

  async execute(message: Discord.Message, args?: string[]) {
    // const sender = `<@${message.author.id}>`;

    const queue: string[] = [];

    if (!message.member.voice.channel) {
      const replyMessage = `:sweat_smile: You need to be inside a voice channel first!`;

      const reply = replyAsMultilineBlockQuote(replyMessage);

      return message.channel.send(reply);
    }

    for (const _url of args) {
      if (!ytdl.validateURL(_url)) continue;
      queue.push(_url)
    }

    if (!queue.length) return; // return approipriate error message

    const connection = await message.member.voice.channel.join();

    const song = queue.shift();

    const dispatcher = connection.play(ytdl(song,
      {
        filter: 'audioonly',
        quality: 'highestaudio'
      }));

    dispatcher.on('start', async () => {
      const songInfo = await ytdl.getBasicInfo(song);
      message.channel.send(`Currently playing ${songInfo.videoDetails.title}`);
    });

    dispatcher.on('finish', () => {
      message.channel.send('Finished playing, see you soon!');
      connection.disconnect();
    });
  }
}

export = play;