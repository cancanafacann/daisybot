const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  let seviye = args[1]
  
     let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
    if(!hm) return message.reply('Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `g!seviye-aç`')
  if(!rol) return message.channel.send('Ayarlayabilmem için bir rol belirtmelisin. \n Örnek: `g!seviye-rol @seviye10 10`')
  if(!seviye) return message.channel.send('Ayarlayabilmem için bir seviye belirtmelisin. \n Örnek: `$seviye-rol @seviye10 10`')
  if(isNaN(args[1])) return message.channel.send('seviye değerini bir sayı biçiminde girmelisin.')
  if(seviye > 700) return message.channel.send('max `700` olarak ayarlanabilir.!')
  
    let kontrol;
  if(kanal == null) kontrol = 'Sunucuda Ayarlanmış Bir Logs Bulunamadı!'
  else kontrol = kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
  let codeming = new Discord.RichEmbed()
  .setTitle('<a:onaytik1:700670918870958131> Başarılı Ayarlandı!')
  .setDescription('Seviye rol ödülü başarıyla ayarlandı.')
    .addBlankField()
  .addField('<a:ok1:700437338811007026> Seviye Log Kanalı:', kontrol, true)
  .addField('<a:ok1:700437338811007026> Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('<a:ok1:700437338811007026> Verilecek Rol:', rol, true)
  .addField('<a:ok1:700437338811007026> Rolün Verileceği Seviye:', seviye)
  .setFooter('👑 X-BOT Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(codeming)
  db.set(`svrol_${message.guild.id}`, rol.id)
  db.set(`rollevel_${message.guild.id}`, seviye)
  

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-rol',
  description: 'seviye ödül rolunu ayarlarsınız.', 
  usage: 'seviye-rol'
};