const Discord = require("discord.js");
const moment = require('moment');
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  const ok = message.client.emojis.get("");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField(" ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz İçerik", "Evet", true)
                }
                else {
                    embed.addField(" Uygunsuz İçerik", "Hayır", true)
                }
                embed.addField('Oluşturulduğu Tarih:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL)
                .setFooter(`BozKurt Bot`,  client.user.avatarURL)
            message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanal bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Kanal ile ilgili bilgi verir.',
  usage: 'kanalbilgi'
}
