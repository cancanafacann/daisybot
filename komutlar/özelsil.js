const Discord = require('discord.js');
let owner = "689100411348582461"


exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x00000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0x00000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠ Uyarı ⚠', 'Mesajları silebilmen için `Mesajları Yönet` yetkisine sahip olmalısın.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('0x0000')
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .addField('__**Eylem:**__', '**__Sohbet silme__**<a:onaytik1:700670918870958131>')
    .addField('__**Yetkili:**__<a:onaytik1:700670918870958131>', message.author.username)
    .addField('__**Sonuç:**__', `**Başarılı <a:onaytik1:700670918870958131>**`)
    .addField('__**Kaç Adet**__<a:onaytik1:700670918870958131>', + messagecount)
    .addField('__Beni Sunucuna Davet Et__ !',`**g!davetet**<a:onaytik1:700670918870958131>`)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <temizlenecek mesaj sayısı>'
};