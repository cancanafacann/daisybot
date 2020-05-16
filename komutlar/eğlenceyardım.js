const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");  
let yardım = new Discord.RichEmbed()  
.setTitle(':dizzy: __**Eğlence Komutları**__:crescent_moon: ')
.setColor('0x00000')
.setDescription('__**Eğlenceli Komutlar !**__')
.setThumbnail(client.user.avatarURL)

.addField('`g!tekmeat @kişi`','**Belirtilen Kişiye Tekme Atarsınız.**') 
.addField('`g!korkut`','**Bot Sizi Korkutmaya Çalışır. **') 
.addField('`g!inek <mesaj>`','**Mesajınızı İneğin Üzerinde Gösterir.**') 
.addField('`g!slots`','**Bot Size Slots Oynatır.**') 
.addField('`g!espri`','**Bot Size Espri Yapar.**')


 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['eğlenceyardım'], 
  permLevel: 0
};

exports.help = {
  name: 'eğlenceyardım',
  katagori : 'yardım',
  description: 'eğlenceyardoö komutalrını gösterir', 
  usage: 'eğlenceyardım'
};