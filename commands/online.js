// guild role color: // .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
// message author role color: //.setColor(`${message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor}`)
// ​
const Discord = require("discord.js");
const request = require("request");
const moment = require("moment");

exports.run = async (client,message,args,config,dir) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  const guildColor = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor
  const userColor = message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor
  request(`https://mcapi.us/server/status?ip=play.legamemc.tk`, (error, response, body) => {
    if(error) return message.channel.send(`:x: Encountered an error when getting LegameMC Status.`)
    var json = JSON.parse(body)
    let act;
    if(json.online === true) { act = 'Online' } else { act = 'Offline' };
    message.channel.send({embed: new Discord.RichEmbed()
                          .setAuthor(message.author.username,message.author.avatarURL)
                          .setColor(guildColor)
                          .setThumbnail(message.guild.iconURL)
                          .addField(`:busts_in_silhouette: Online Players:`,`${json.players.now}/${json.players.max}
 ​`,true)
                          .addField(`:green_apple: Server Status:`,`${act}
 ​`,true)
                          .addField(`:notepad_spiral: Server Version:`,`${json.server.name}
 ​`,true)
                          .addField(`:writing_hand: Last Request:`,`${moment.duration(json.duration).asHours().toFixed(0)} Hours Ago
 ​`,true)
                          .setFooter(`Join us Now at: Play.LEGAMEMC.Tk | 1.8 | FREE TO PLAY!`)
                          .setTimestamp(new Date())
                         });
  })
}