const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://kajadex292:kajadex292@cluster0.ptwm1vv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_13_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZzWU52Tk5sMEdXMmIyOWRXWGM3eERPTmJENTFsaHRFZ3FIeUxJd1Y2bG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ4ODMyMDA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NUYzNkRBNENFQzk1RENBQ0IxQUZBMTIwNjdDRjI3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5ODY4MDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDg4MzIwMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA2QURCMTk2NUQ2MTBBNjgzMTNCRTM0M0Y3MUI2QUM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDk4NjgwOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRWd28wdm54UmVLNm5LZ3doaUtVaEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2IxY2RkZGEtNGJjNi00YjI5LWE5MDEtNTY2YzVlOWE4YjllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDE5MSxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAxMixcbiAgICAgIDEwLFxuICAgICAgMTUwLFxuICAgICAgMTc0LFxuICAgICAgNjksXG4gICAgICAyOSxcbiAgICAgIDE4MyxcbiAgICAgIDIzNCxcbiAgICAgIDE4MyxcbiAgICAgIDI0NixcbiAgICAgIDMsXG4gICAgICAxOSxcbiAgICAgIDIzOCxcbiAgICAgIDE4MCxcbiAgICAgIDI1MCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDI0NSxcbiAgICAgIDE1NyxcbiAgICAgIDIxLFxuICAgICAgMjI3LFxuICAgICAgMTcxLFxuICAgICAgMTA4LFxuICAgICAgMTgxLFxuICAgICAgMjExLFxuICAgICAgMTY5LFxuICAgICAgODksXG4gICAgICAxMDMsXG4gICAgICAyNDYsXG4gICAgICAxOTAsXG4gICAgICAyMTgsXG4gICAgICAyNTAsXG4gICAgICAzNixcbiAgICAgIDIxOCxcbiAgICAgIDE3NSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSU1dHNzJBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDg4MzIwMDk6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3NjY2MDc4MTgzNjI1OjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFiZGl0ZWNoXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW5VMk1RRkVLNis0ckVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJweCtLa2FmZDNoWkVuSDF6V3F4VENPV0dVMzBtNDFjcmpGVlR4V0ljd0ZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk8rd25pUC95YkY3bHZKWmR3L2hmc1pKQnR4N05GU2hWZ3NOSkJhZ1pNRTllNVlhNlh2STJvM2x2MXZwVlVQa0VzNldscFhsalJRRnZ4Tjd3SUFWK0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFUNWQzRm5kNisydFhKdVBFdUptNDdtLzB3aituNVFySVljZDh2N2JIbEZpd3ZoTzduMDROL2RwRC9BQ2lEK1R4Tk00SE0xREtaU041QWlmdi9qSmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODgzMjAwOTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0OTg2ODAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3lHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPeUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrSnh1bmpqZUgzZ2YwWmQ5TnRhQURFZWtaamhWL3NGYmo0SmI4TDhKb2xBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODYyMzYyMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDk2Njc3NjczMlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Abdul-md",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
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
