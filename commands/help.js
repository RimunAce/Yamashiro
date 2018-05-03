// guild role color: // .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
// message author role color: //.setColor(`${message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor}`)
// ​
const Discord = require("discord.js");

exports.run = async (client,message,args,config,dir) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  const guildColor = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor
  const userColor = message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor
  const embed = new Discord.RichEmbed()
  .setColor(guildColor)
  .setAuthor(`${message.author.tag} Requested Help!`,message.author.avatarURL)
  .setDescription(`\`y.online\` ~Send LegameMC Server Status
\`y.ping\` ~ Ping Yamashiro!`)
}