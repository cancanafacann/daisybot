const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args, tools) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){
  let kişi;
  if (message.mentions.members.first()) {
    kişi = message.mentions.members.first();
  } else {
    kişi = message.author;
  }

  let bilgi = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  let sayı2;
  if (!bilgi) {
    sayı2 = 0;
  } else {
    sayı2 = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  }
  let veri = await db.fetch(`rol1_${message.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${message.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${message.guild.id}`);
  let veri2 = await db.fetch(`rol2_${message.guild.id}`);
  if (!veri) {
    const embed = new Discord.RichEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Toplam davet:`, sayı2, true)
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
  }
  if (message.member.roles.has(veri2)) {
    const embed = new Discord.RichEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Toplam davet:`, sayı2, true)
      .setColor("0x00000")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
  if (!message.member.roles.has(veri)) {
    const embed = new Discord.RichEmbed()
      .addField(`Davetlerin Sahibi`, `<@` + kişi.id + `>`, true)
      .addField(`Toplam davet:`, sayı2, true)
      .setColor("0x00000")
      .setDescription(
        `${message.guild.roles.get(veri).name} rank için son ${-sayı2 -
          -veri12} davet!`
      );
    message.channel.send(embed);
    return;
  }
  if (message.member.roles.has(veri)) {
    if (!veri2) {
      const embed = new Discord.RichEmbed()
        .addField(`Davetlerin Sahibi`, `<@` + kişi.id + `>`, true)
        .addField(`Toplam davet:`, sayı2, true)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    }
    if (veri2) {
      const embed = new Discord.RichEmbed()
        .addField(`Davetlerin Sahibi`, `<@` + kişi.id + `>`, true)
        .addField(`Toplam davet:`, sayı2, true)
        .setColor("BLACK")
        .setDescription(
          `${message.guild.roles.get(veri2).name} rank için son ${-sayı2 -
            -veri21} davet!`
        );
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
  aliases: ["invite", "davetlerim"],
  permLevel: 0
};

exports.help = {
  name: "davetler"
};