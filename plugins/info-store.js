let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let gambar = 'https://telegra.ph/file/21e252f71926f7fa0c931.jpg'
let rull = `
RullBot Store
Ini Versi Beta Test Cuy V11 Jadi Kalo Mau Nambahin Fiturnya Chat Developer Aja Nanti Cuma 6k an Doang
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "Pasang Iklan", rowId: '.iklan' },
	    {title: "Store", rowId: '.p' },
	{title: "Sewa Bot", rowId: '.p' },
	{title: "Mau Nambahin Fitur Store; Pc Owner!", rowId: 'owner' },
	]
    },
]

const listMessage = {
  text: rull,
  footer: botdate,
  title: wm,
  buttonText: "Pilih Disini",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store', 'premium']
handler.tags = ['main']
handler.command = /^(store)$/i

export default handler
