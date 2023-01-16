let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Ahhajajjsbssnnsn*`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🤓 Pc Admin', url: 'https://wa.me/6287753812675'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['iklan'] 
 handler.tags = ['info'] 
 handler.command = /^(iklan)$/i 
  
 export default handler
