const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
   let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
    let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye exp sistemde bunu deniyorsun ? \n Bunu Deniyebilirsin: `g!seviye-xp <exp sayısı>`')
  let kanals = message.mentions.channels.first()
  if(!kanals) return message.channel.send('Kanal ayarlamam için bir kanal belirtmen gerekiyor. |n Örnek: `g!seviye-kanal #level-log`')
  
    let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
    
  let kontrol3;
  if(seviyerol == null) kontrol3 = 'Seviye Rol Sistemi Aktif Değil! <a:warning:651848396834996279>'
  else kontrol3 = seviyerol
  
  let codeming = new Discord.RichEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescription('Seviye logs kanalı ayarlandı.Üyeler seviye atlayınca orda belirteceğim.')
  .addBlankField()
  .addField('Seviye Log Kanalı:', kanals, true)
  .addField('Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('Seviye Rol:', kontrol3)
  .setFooter('X-BOT Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(codeming)
  
  message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından logs kanalı **'+kanals+'** Olarak ayarlandı.!\n `BozkurtBOTSeviye Sistemi`')
  db.set(`svlog_${message.guild.id}`, kanals)

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-log',
  description: 'seviye atlayanların mesajının gideceği kanalı ayarlarsınız.', 
  usage: 'seviye-log'
};