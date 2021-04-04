import Discord from 'discord.js';

export interface Command {
  name: string;
  description: string;
  cooldown?: number;
  aliases?: string[];
  usage?: string;
  permissions?: string[];
  guildOnly?: boolean;
  execute(message: Discord.Message, args?: string[], client?: Discord.Client): Promise<Discord.Message>;
}