const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('**<a:stars2:700679276483182702>**YAPIMCILARIM**✵| Mustafa#8170,Elvêsy#0333**')    
    .addField('**<a:ok1:700437338811007026>Site Yapımcımız**','**Elmrvcik#6759**');

    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapimcim',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapımcım'
};
