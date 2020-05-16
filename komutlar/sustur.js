const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Lütfen Kullanıcı Gir.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bunu Yapmaya Yetkin Yok! Geçerli Yetki `Mesajları Yönet`");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Süreyi Girmeyi Unuttun! \nsaniye(s), Dakika(m), Saat(h), Gün(d) \#ÖRN; `!mute @kullanıcı 1m`");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Adlı Kişi ${ms(ms(mutetime))} Saniye Kadar Mutelendi!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Adlı Kişinin Mutesi Kalktı!`);
  }, ms(mutetime));


//end of module
}
exports.conf = {
    enabled: true,
    aliases: ['mute'],
    permLevel: 3
};

exports.help = {
    name: 'mute',
    description: 'Mutelersınız.',
    usage: 'mute'
};


