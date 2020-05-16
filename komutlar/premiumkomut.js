const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Premium`, client.user.avatarURL) 

      .setThumbnail(client.user.avatarURL)
 .setDescription('**PREMİUM KOMUTLAR**')
     .addField('**Premium komutları**','Yardımcı:『 ҭʀ ~ єlvєsч 』ϟ#9678')
      .addField('**Premium **','`g!korona`,`g!öpücük` ')
      .addField('**Premium **','`g!`,`g!prefix-ayarla`, `g!modlog #kanal` ')
       .setFooter(``, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'premium',
      usage: 'premium',
      description: 'premium komutlarını gösteir.',
};