let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Bantu Subscribe Lah Bang*`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Subscribe My Youtube Channel', url: 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['myyt'] 
 handler.tags = ['info'] 
 handler.command = /^(myyt)$/i 
  
 export default handler
