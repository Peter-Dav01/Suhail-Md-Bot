const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9052552656";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_24_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHRUeTk5aHdxZER6OFNZQlp0L1FPd3VuQUN1d29jc0kwLzFNbFlhVE5jUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUyNTUyNjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QUU0N0Q1RjFBQkFBODM0NUFENUMzRjI1Mzc0NzFFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxMTAyNzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUyNTUyNjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NEVBNDVGNTA5RTQ5RDJENzU5QkEwODE1MEQ4RkFERVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxMTAyODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGFzUnJUNUZTTlcydVJkelJoaGdQUVwiLFxuICBcInBob25lSWRcIjogXCIyY2Y5MmMxOC0xOGZiLTQ0ODMtYWFhMi1lNTgxOTExZTJjNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMDEsXG4gICAgICAzNixcbiAgICAgIDU5LFxuICAgICAgOTMsXG4gICAgICAxNDAsXG4gICAgICAyNDQsXG4gICAgICAxMTMsXG4gICAgICAxMDYsXG4gICAgICAyMjYsXG4gICAgICA0MSxcbiAgICAgIDEwOSxcbiAgICAgIDU2LFxuICAgICAgNzUsXG4gICAgICAzLFxuICAgICAgMTgsXG4gICAgICAxMDIsXG4gICAgICAxMTgsXG4gICAgICA3LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgOTEsXG4gICAgICAyNDgsXG4gICAgICA1NixcbiAgICAgIDIsXG4gICAgICAyMyxcbiAgICAgIDE2MyxcbiAgICAgIDIzOCxcbiAgICAgIDExMSxcbiAgICAgIDEzMixcbiAgICAgIDEwOSxcbiAgICAgIDEwOCxcbiAgICAgIDE1NCxcbiAgICAgIDE4MyxcbiAgICAgIDE5MSxcbiAgICAgIDIxNyxcbiAgICAgIDIyLFxuICAgICAgMjIwLFxuICAgICAgNSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENVI3UjUySlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MjU1MjY1NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGV0ZXIgRGF2aWQgT2RvZG8gT2Nob2d3dVwiLFxuICAgIFwibGlkXCI6IFwiMjgwODUyMjczNjAyNjg1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRHNjQ4Q0VQN0J3TGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwbExDY01FRFVsZGZDVE1PZmh0WnFYRmV3N0JqdlljKzdkZUpoNTNFSTJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZpWEhZZkQ0OG90NkZ4SnphTHNlNXA1d01VUHFnZkNHbWs3d1J4MVFYMkZicXVMNXVHaEFLay9lYkdJQ3BIeEwzTXRtMlY1akc2Q2ZPVmp0d2FOSkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFNTXFnZno5YzlBdmpaUjJCcmkxck9iUStUYWUzVytKOFB6ckxwOFpTaCtsT3J0LzhiN2VhN2svQkpmZGZGbW1HOU9JdFh3M2ZwL2ovNWh1NEk2ZUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI1NTI2NTY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTEwMjc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3VQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPdVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1UUxBOTdMeDdpa1FpTVJQQk94ZlVuUTBOUWR3SnZ0N0JHVzZhQ0d3UC9VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3MDA5MDMyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MTEwMjc3NDExXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
