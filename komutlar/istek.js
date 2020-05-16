const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal #kanal\``)
  .setColor("#0x00000")
  .setFooter(`X-BOT| İstek Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor("#0x00000")
  .setFooter(`X-BOT| İstek Sistemi.`, client.user.avatarURL)
  const cfx3 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğinin Gönderilmesini istiyorsan \`istiyorum\` yazman gerekiyor.`)
  .setColor("#0x00000")
  .setFooter(`X-BOT| İstek Sistemi.`, client.user.avatarURL)
  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#0x00000")
  .setFooter(`X-BOT| İstek Sistemi.`, client.user.avatarURL)
  
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
message.channel.send(cfx3)
//CodeFENIX // CFX
.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
message.channel.send(cfx4)
//CodeFENIX //CFX
const cfx = new Discord.RichEmbed()
.setTitle("**İSTEK VAR !!!**")
.setThumbnail("https://cdn.discordapp.com/avatars/616519878962315284/06c66d90611d8c5b7e5db8f67e448ea4.png?size=128")
.setColor("#0x00000")
.addField(`<a:ok1:700437338811007026>Kullanıcı Adı`,message.author.username,true)
.addField(`<a:ok1:700437338811007026>Kullanıcı ID`,message.author.id,true)
.addField(`<a:ok1:700437338811007026>Kullanıcı Tagı`,message.author.discriminator,true)
.addField("<a:ok1:700437338811007026>İstek", code)
.setThumbnail(message.author.avatarURL)
chan.send(cfx);
});
});
}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'istek',
  description: 'İstek Yapar',
  usage: 'istek <istediğiniz>'
};
