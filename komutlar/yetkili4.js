const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");  
let yardım = new Discord.RichEmbed()  
.setTitle(':dizzy:__**Yetkili Komutları**__:crescent_moon:')
.setColor('BLUE')
.setDescription('Kodlar Eklenmeye Devam Edilecektir`')
 .addField('__**Kullanabileceğiniz Başka Kodlar **__',`
  
**g!reklamkickaç/kapat 
**g!sunucumesaj (SAHİP)
**g!reklam-filtre-aç  
**g!reklam-engel      
**g!öp              
**g!youtube       
**g!yapımcım           
**g!yavaş-mod 1/10     

`)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yetkilidörtler'], 
  permLevel: 0
};

exports.help = {
  name: 'yetkilidört',
  description: 'Yetkili komutalrını gösterir', 
  usage: 'yetkilidört',
};