const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require ('../ayarlar.json')
exports.run = async (bot, message, args) => {
  if(message.author.id !== ayarlar.sahip) return message.reply(':no_entry: Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.'); // Sadece
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** IDli kullanıcı artık gold üye oldu!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-ver"],
  permLevel: 0
};
exports.help = {
  name: 'goldver',
  description: '[Admin Komutu]',
  usage: 'gold-ver'
};