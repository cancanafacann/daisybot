const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require ('../ayarlar.json')
exports.run = async (bot, message, args) => {
 if(message.author.id !== ayarlar.sahip) return message.reply(':no_entry: Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.'); // Sadece
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`gold_${nesne}`)
  
  message.channel.send(`**${nesne}** IDli kullanıcı artık gold üye değil!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldçıkar"],
  permLevel: 0
};
exports.help = {
  name: 'goldçıkar',
  description: '[Admin Komutu]',
  usage: 'goldçıkar <ID>'
};