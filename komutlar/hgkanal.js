const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<:no:663378512417128449> Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`<:no:663378512417128449> Giriş Çıkış Kanalını Ayarlamak İçin \`g!hgbbkanal ayarla #kanal\` | Kapatmak İstiyorsanız \`g!hgbbkanal kapat\` Yazabilirsiniz`)
  if (args[0] !== 'ayarla' && args[0] !== 'kapat') return message.channel.send(`<:no:663378512417128449> Giriş Çıkış Kanalını Ayarlamak İçin \`g!hgbbkanal ayarla #kanal\` | Kapatmak İstiyorsanız \`g!vkanal kapat\` Yazabilirsiniz`)

    if (args[0] == 'ayarla') {
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send('<:no:663378512417128449> Hoşgeldin kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `g!hgbbkanal #kanal`')
    db.set(`hgKanal_${message.guild.id}`, message.mentions.channels.first().id)
    let i = await db.fetch(`hgKanal_${message.guild.id}`)
     	  const embed = new Discord.RichEmbed()
  .setDescription(`<:yes:663378512496951376> Giriş Çıkış Sistemi Başarıyla Açıldı Kanal <#${i}> Olarak Ayarlandı!` + "\n\n Kapatmak için **`g!hgbbkanal kapat`** Yazabilirsiniz!")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`hgKanal_${message.guild.id}`)
    if (!üye) return message.channel.send(`<:no:663378512417128449> Kapatman İçin HG-BB kanalını ayarlaman Lazım!.`)
    
    
    db.delete(`hgKanal_${message.guild.id}`)
    
	  const embed = new Discord.RichEmbed()
  .setDescription(`<:yes:663378512496951376> Giriş Çıkış Sistemini Başarıyla Kapattım`
    )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });  }
};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['hgbbkanal','gkanal','giriş-kanal','girişkanal'],
 permLevel: 0
};

exports.help = {
 name: 'vkanal',
 description: 'hoşgeldin kanalı ayarlar',
 usage: 'gkanal'
};