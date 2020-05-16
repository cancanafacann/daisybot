const Discord = require('discord.js')
const fs = require('fs');
  const db = require('quick.db');

exports.run = async (client, message, args) => {
    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("**Kayıt komutları kapalı açmak için g!kayıt-sistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  

  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("Kanalı Etiketlemelisin Dostum.")
    }

  
    db.set(`kkanal_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Kayıt Kanalı Başarıyla Ayarlandı|Kanal: ${channel}`)
    .setColor("BLACK")
    message.channel.send({embed})
}
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-kanal'],
    permLevel: `yetkiyok`,

}

exports.help = {
    name: 'kayıtkanal',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'kayıt-kanal <#kanal>',

}