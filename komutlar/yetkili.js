const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");  
let yardım = new Discord.RichEmbed()  
.setTitle(':dizzy: __**Yetkili Komutları**__:crescent_moon: ')
.setColor('BLUE')
.setDescription('__**g!sayaç-ayarla**__ 》Takipte Kalın !\n \n __**g!sayac-hg-msg **__》 **g!sayac-bb-msg**')
  .addField('__**Kullanabileceğiniz Başka Kodlar **__',`
 **g!ayrıl             》g!hgbbkanalayarla**
 **g!davet-takip#kanal 》g!bug-bildir**
 **g!davet-sıralaması  》g!canlıdestek**
 **g!davet-oluştur     》g!duyuru** 
 **g!forceban id       》g!güvenlik #kanal**
 **g!prefix-ayarla     》g!güvenlik** 
 **g!giriş-izni bot id 》g!emojiyükle**

`)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yetkililer'], 
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili komutalrını gösterir', 
  usage: 'yetkili'
};