const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
 let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);

  if (!veri) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Dpstum herhani bir rank ayarlanmamış ayarlamak için g!rank-ekle `)
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  }
  ///////////////////
  if (veri) {
    if (!veri2) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `1 - Rol: **${
            message.guild.roles.get(veri).name
          }** - ${veri12} Davet!`
        )
        .setColor("0x00000")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    } else {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `1 - Rol: **${
            message.guild.roles.get(veri).name
          }** - ${veri12} Davet!\n2 - Rol: **${
            message.guild.roles.get(veri2).name
          }** - ${veri21} Davet!`
        )
        .setColor("0x00000")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
  }
  }
      
  }

      };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "rank-liste",
  description: "rütbe-liste",
  usage: "rank-liste"
};