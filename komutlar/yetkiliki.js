const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");  
let yardım = new Discord.RichEmbed()  
.setTitle(':dizzy:__**Yetkili Komutları**__:crescent_moon:')
.setColor('BLUE')
.setDescription('__**g!seviye**` \n \n __**g!seviye-aç**__》g!seviye-log @rol` \n \n __**g!seviye-rol**__ 》 g!seviye-exp`')
 .addField('__**Kullanabileceğiniz Başka Kodlar **__',`
  
**g!sunucu-yedek-al/yükle》g!yazı-kanal-aç**
**g!sunucumesaj (SAHİP)》g!çekiliş**
**g!unban              》g!öneri**
**g!botmesajsil        》g!bug-bildir**
**g!uyar               》g!bansorgulama**
**g!uyarı-kaldır       》g!davetoluştur**
**g!yapımcım           》g!antispam aç/kapat**
**g!yavaş-mod 1/10     》g!davetet**

`)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yetkilikiler'], 
  permLevel: 0
};

exports.help = {
  name: 'yetkiliki',
  description: 'Yetkili komutalrını gösterir', 
  usage: 'yetkiliki',
};