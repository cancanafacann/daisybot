const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (message.author.id !== ayarlar.sahip) return message.reply('<a:duyur:700437578750361610> Bu komutu sadece yapımcım kullanabilir!');
    message.guild.owner.send(`\`${message.guild.name}\` sunucusundan sahibimin emri ile ayrıldım!`)
    message.guild.leave()
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ayrıl',
    description: 'Bot Sunucudan Ayrılır.',
    usage: 'ayrıl'
  };// BİRŞEY YAPMA AAAAAA//