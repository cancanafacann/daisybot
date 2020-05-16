const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
 let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`)
  if (veri2) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Üzügünüm maksimum rank sayısına ulaştın`)
      .setColor("Random")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (!veri) {
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz!\nÖrnek: g!rank-ekle @Qral 5`
        )
        .setColor("blue")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Davet sayısı belirtmelisin\nÖrneğin: g!rank-ekle @serverbooster 5`
        )
        .setColor("random")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı bir işlem gerçekleşti ${sine} rolü ${enis} adet davet karşılıgında elde edilebilcek :)`
      )
      .setColor("random")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
    return;
  }
  ///////////////////
  else{
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz!\nÖrnek: ${prefix}g!rank-ekle @Qral 5`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir davet sayısı belirtiniz!\nÖrnek: ${prefix}rank-ekle @Qral 5`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı bir şekilde ${sine} rolü ${enis} davet karşılığında elde edilebilecek!`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
if(enis < veri12){
  let hhh = await db.fetch(`rol1_${message.guild.id}`)
  let sss = await db.fetch(`roldavet1_${message.guild.id}`)
  await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
await db.set(`rol2_${message.guild.id}`, hhh);
    await db.set(`roldavet2_${message.guild.id}`, sss);
  
    return
}else{
    await db.set(`rol2_${message.guild.id}`, sine.id);
    await db.set(`roldavet2_${message.guild.id}`, enis);
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
  name: "rank-ekle",
  description: "rank-ekle",
  usage: "rank-ekle"
};
