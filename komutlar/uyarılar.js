const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async(client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
 // if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
if (!user) {
  user = message.author;
}
  var gID = message.guild.id;
   var swear = await db.fetch(`swearCount_${user.id}`);
   var serverSwear =  await db.fetch(`serverSwear_${user.id}_${message.guild.id}`);
  var adsc =  await db.fetch(`adsc_${user.id}_${message.guild.id}`);
   var warn =  await db.fetch(`warns_${user.id}_${gID}`);
   var count = await db.fetch(`warnCount_${user.id}_${gID}`);

  var percentage = serverSwear*100/swear;
  
    
    
    
  const embed = new Discord.RichEmbed()
.setColor(client.ayarlar.renk)
  .setAuthor(`${user.tag} - Uyarı Bilgisi`, user.avatarURL)
  .addField("Uyarı Sayısı", db.has(`uyarılar_${user.id}`) ? db.fetch(`uyarılar_${user.id}`) : 0)
  .setFooter(`${client.user.username} - Uyarı Sistemi`, client.user.avatarURL)
  .addField("Sunucuda Kullandığı Küfür Sayısı: ", serverSwear ? serverSwear + " (ettiği tüm küfürlerin " + percentage.toFixed() + "%'si')" : "0" , true)
  .addField("Sunucuda Yaptığı Reklam Sayısı: ", adsc ? adsc : "0", true)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warns"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarılar',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını gösterir.',
  usage: 'uyarılar <@kullanıcı>'
};