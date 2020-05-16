const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  let e3 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol = message.mentions.roles.first();
  if (!rol) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Öncelikle silincek rankı etiketlemelisin`)
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (rol.id === veri) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı şekilde etiketlediğiniz rank silindi **${
          message.guild.roles.get(veri).name
        }** rolüne sahip rank silindi!`
      )
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);

    if (!veri) {
      await db.delete(`rol1_${message.guild.id}`);
      await db.delete(`roldavet1_${message.guild.id}`);
    } else {
      await db.set(`rol1_${message.guild.id}`, veri2);
      await db.set(`roldavet1_${message.guild.id}`, e3);
      await db.delete(`rol2_${message.guild.id}`);
      await db.delete(`roldavet2_${message.guild.id}`);
      return;
    }
  } else if (rol.id === veri2) {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarıyla rütbeler arasında **${
          message.guild.roles.get(veri2).name
        }** rolüne sahip rütbe silindi!`
      )
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);

    await db.delete(`rol2_${message.guild.id}`);
    await db.delete(`roldavet2_${message.guild.id}`);
    return;
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(`Böyle bir rank bulamadım dostum kontrol etmek için g!rankliste`)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  } 
      }     
  }

      };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ranksil"],
  permLevel: 2
};
exports.help = {
  name: "rank-sil",
  description: "rank-sil",
  usage: "rank-sil"
 
};
