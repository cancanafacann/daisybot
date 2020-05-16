const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.channel.send(" **| Lütfen Birini Etiketleyiniz!**");
  }

  let member = message.guild.member(message.mentions.users.first());
  if(!member){
    message.channel.send(" **| Bu Kullanıcı Geçerli Görmüyor!**");
  }

  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Bu komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
  }

  let msg = await message.channel.send(":timer: **| Şimdi Oyla (**\`10\`**) Saniyeniz Var!**");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("**Oylama Tamamlandı!**", "═════════════════════════\n" +
                                          " **| Toplam Oy (**\`Evet\`**)** ➠ " + `${YES_Count-1}\n` +
                                          " **| Toplam Oy (**\`Hayır\`**)** ➠ " + `${NO_Count-1}\n` +
                                          "═════════════════════════\n" +
                                          "**NOT: Yasaklamak  İçin Gerekli Oylar (**\`+3\`**)**\n" +
                                          "═════════════════════════", true)

           
            .setColor("RANDOM")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    member.ban().then(member => {
      message.reply(` **|** ${member.user.username} **Adlı Kullanıcı Başarıyla Oy ban Sistemi İle Banlandı.**`)
    })
  }else{

  }

  message.channel.send("\n" + " **| Şimdilik Güvende!**");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy-ban'],
  permLevel: 2
};

exports.help = {
  name: 'oy-ban',
  description: 'Sunucuda Oy ban Sistemi İle Birini Sunucudan Atmaya İşe Yarar.',
  usage: 'oy-ban'
};