const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('`logs` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Uyarı sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyaracağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .addField('Eylem:', 'Uyarı verme')
  .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};