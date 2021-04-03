import Discord from 'discord.js';

export function replyAsMultilineBlockQuote(content: string): string {
  return `>>> ${content}`;
}