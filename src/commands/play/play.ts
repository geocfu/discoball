import Discord from 'discord.js';

import { Config } from '../../config';

import { replyAsMultilineBlockQuote } from '../../helpers/replies';

export class Play {
  public static readonly command: string = Config.prefix + Config.callsign;
  public static readonly description: string = 'Default no argument response';

  public static execute(message: Discord.Message, args: string[]): Promise<Discord.Message> {

    const sender = `<@${message.author.id}>`;

    const content = `play song`;
    console.log(args);


    const reply = replyAsMultilineBlockQuote(content);

    return message.channel.send(reply);
  }
};
