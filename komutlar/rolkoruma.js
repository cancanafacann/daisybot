const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
 let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: g!rol-koruma aç && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Görünüşe göre rol koruma zaten aktif!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Rol koruma başarıyla açıldı!**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription("**Rol Koruma başarıyla kapandı!**");

    message.channel.send(embed);
  }
}
     }
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-koruma"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
};