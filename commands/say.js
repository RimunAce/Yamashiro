// guild role color: // .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
// message author role color: //.setColor(`${message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor}`)
// ​
const Discord = require("discord.js");

exports.run = async (client,message,args,config,dir) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  const guildColor = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor
  const userColor = message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor
  let text = args.slice(0).join(' ')
  if(!text) return message.channel.send(`**USAGE** | \`y.say <TEXT>\``);
  message.channel.send(text)
}