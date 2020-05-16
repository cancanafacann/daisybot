const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
let yardım = new Discord.RichEmbed()  
.setTitle(':dizzy:__**Yetkili Komutları**__:crescent_moon:')
.setColor('BLUE')
.setDescription('__**g!serverpanel**` \n \n __**g!eval**__》g!herkese-rol-ver @rol` \n \n __**g!herkesten-rol-al @rol**__ 》 g!hgbbkanalayarla #kanal`')
 .addField('__**Kullanabileceğiniz Başka Kodlar **__',`
  
**g!istek               》g!mute**
**g!kanalbilgi          》g!reklam-taraması**
**g!karaliste           》g!rol-koruma**
**g!katılımsıralaması   》g!ses-kanal-aç**
**g!kick                》g!sil**
**g!karaliste-al        》g!sunucuinfo**
**g!çıkma-teklifi-et    》g!sunucular**
**g!anti-raid           》g!sunucu-kurulum**
**g!dm @kişi            》g!mod-log-ayarla**

`)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yetkiliüçler'],
  permLevel: 0
};

exports.help = {
  name: 'yetkiliüç',
  description: 'Yetkili komutalrını gösterir', 
  usage: 'yetkiliüç',
};