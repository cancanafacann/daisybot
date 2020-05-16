const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
 
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  
  if(hm) return message.reply('Bu tuhaf! Anlaşılan seviye sistemi zaten aktif edilmiş.. \n Bunu mu arıyorsun? `!seviye-kapat`')
  
  
  
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
  
  let kontrol;
  if(kanal == null) kontrol = 'Sunucuda Ayarlanmış Bir Logs Bulunamadı!'
  else kontrol = kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
  let kontrol3;
  if(seviyerol == null) kontrol3 = 'Seviye Rol Sistemi Aktif Değil!'
  else kontrol3 = seviyerol
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle('<a:onay2:700672228622073987> | Aktif Edildi!')
  .setDescription(message.guild.name + ' Sunucusuna başarıyla seviye sistemini aktifleştirdim!\n Genel ayarlar aşağıda veriliyor..')
  .addBlankField()
  .addField('<a:diamond:700671988817068094> Seviye Log Kanalı:', kontrol, true)
  .addField('<a:diamond:700671988817068094> Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('<a:diamond:700671988817068094> Seviye Rol:', kontrol3)
  .setFooter('👑 X-BOT Seviye Sistemi!')
  .setColor('RANDOM')
  message.channel.send(codeming)
 
message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından aktifleştirildi!\n `BozkurtBOT Seviye Sistemi`')
  
  
db.set(`seviyeacik_${message.guild.id}`, 'açık')

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-aç',
  description: 'seviye sistemini açarsınız', 
  usage: 'seviye-aç'
};