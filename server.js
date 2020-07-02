const CryptoJS = require("crypto-js");
const passport = require('passport')
const db = require("sigidb")
let userID = "";
let guildID = "";
const e = text => {
  if (!text) return;
  return CryptoJS.TripleDES.encrypt(text, "Secret Passphrase");
};
const d = cyphertext => { //lol sypher
  if (!cyphertext) return;
  return CryptoJS.TripleDES.decrypt(cyphertext, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
};
const Discord = require("discord.js");
const client = new Discord.Client();
let express = require('express');
let app = express();
//let guild = e("727934714974830722");
//let user = e("382572416708116482");
//console.log(`guild: ${guild}\nUser: ${user}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guild}&userID=${user}`}`)



const website = () => {
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {guildID: req.query.guildID,userID: req.query.userID});
});
app.post("/verify", async(req,res) => {
  console.log(req.query)
  const guildID = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID = d(req.query.userID.replace(/ /gi, "+"));
  const guildID1 = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID1 = d(req.query.userID.replace(/ /gi, "+"));
  if(db.fetch(`verified_${guildID1}_${userID1}`)) return res.redirect("/error");
//  var en = CryptoJS.TripleDES.encrypt("382572416708116482", "Secret Passphrase");
//var de = CryptoJS.TripleDES.decrypt(en, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

  console.log(`guild: ${guildID}\nUser: ${userID}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guildID}&userID=${userID}`}`) //what logo should i design for the bot? a cop? a robot? an alien?
  
  await res.redirect(`/verified?guildID=${req.query.guildID.replace(/ /gi, "+")}&userID=${req.query.userID.replace(/ /gi, "+")}`);
})

  
  
  
app.get("/verified", (req,res) => {
  const guildID = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID = d(req.query.userID.replace(/ /gi, "+"));
  client.guilds.cache.get(guildID).members.cache.get(userID).roles.add("728308339058147431");
  db.set(`verified_${guildID}_${userID}`, "verified.");
  res.render("verified", {guild: client.guilds.cache.get(guildID), member: client.guilds.cache.get(guildID).members.cache.get(userID)})
//  alert(d(req.headers.guildID))
})
app.listen(3000, () => console.log('Example app listening on port 4000!'));
};
client.on("ready", () => {
  console.log(`Bot is online`)
website();
});
client.on("message", message => {
  let msg = message;
  if(!msg.content.startsWith('!')) return;
  const cmd = msg.content.split(' ')[0].replace('!', "")
if(message.author.bot) return;
  if(cmd === "create"){
    message.channel.send(`https://smart-captcha.glitch.me/?guildID=${e(message.guild.id)}&userID=${e(message.author.id)}`)
  }

  if(cmd === 'verify') {
     const gis = require('g-i-s');
gis(, logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    const attachment = new Discord.MessageAttachment(results[Math.floor(Math.random() * results.length)].url);
    // Send the attachment in the message channel
    msg.channel.send(attachment);
  }
}
  }
  
})
client.login("NzI4MjgxNTA3MzEwOTkzNDI5.Xv4c1A.1JBIBr_aWcy_OtuTBda-NP1426M")