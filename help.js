
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
━━━❲ Happy -𝘽𝙊𝙏 ━━━

 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Fitur : ngebug,harap di maklumi 

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}menu
 ${no++} ➳ ${prefix}rules
 ${no++} ➳ ${prefix}owner
 ${no++} ➳ ${prefix}ownerinfo
 ${no++} ➳ ${prefix}infoowner

 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}verify
 ${no++} ➳ ${prefix}report
 ${no++} ➳ ${prefix}request
 ${no++} ➳ ${prefix}transfer
 ${no++} ➳ ${prefix}menfess
 ${no++} ➳ ${prefix}buatroom
 ${no++} ➳ ${prefix}secretchat
 ${no++} ➳ ${prefix}cekprem
 ${no++} ➳ ${prefix}daftarprem
 ${no++} ➳ ${prefix}changename

 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}error
 ${no++} ➳ ${prefix}clearerr
 ${no++} ➳ ${prefix}siaran
 ${no++} ➳ ${prefix}session
 ${no++} ➳ ${prefix}resetdb
 ${no++} ➳ ${prefix}runtime
 ${no++} ➳ ${prefix}setexif
 ${no++} ➳ ${prefix}setwm
 ${no++} ➳ ${prefix}setfooter
 ${no++} ➳ ${prefix}setppbot
 ${no++} ➳ ${prefix}addprem
 ${no++} ➳ ${prefix}delprem
 ${no++} ➳ ${prefix}bc
 ${no++} ➳ ${prefix}bctext
 ${no++} ➳ ${prefix}bcvideo
 ${no++} ➳ ${prefix}bcaudio
 ${no++} ➳ ${prefix}bcimage
 ${no++} ➳ ${prefix}broadcast

 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}fitnah
 ${no++} ➳ ${prefix}delete
 ${no++} ➳ ${prefix}revoke
 ${no++} ➳ ${prefix}tagall
 ${no++} ➳ ${prefix}hidetag
 ${no++} ➳ ${prefix}setdesc
 ${no++} ➳ ${prefix}linkgrup
 ${no++} ➳ ${prefix}infogroup
 ${no++} ➳ ${prefix}setnamegrup
 ${no++} ➳ ${prefix}group open
 ${no++} ➳ ${prefix}group close
 ${no++} ➳ ${prefix}antilink on
 ${no++} ➳ ${prefix}antilink off
 ${no++} ➳ ${prefix}welcome on
 ${no++} ➳ ${prefix}welcome off
 ${no++} ➳ ${prefix}tiktokauto on
 ${no++} ➳ ${prefix}tiktokauto off
 ${no++} ➳ ${prefix}kick @tag
 ${no++} ➳ ${prefix}demote @tag
 ${no++} ➳ ${prefix}promote @tag
 
 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}sadcat
 ${no++} ➳ ${prefix}translate
 ${no++} ➳ ${prefix}stalkff
 ${no++} ➳ ${prefix}stalknpm
 ${no++} ➳ ${prefix}stalkgithub
 ${no++} ➳ ${prefix}balikhuruf
 ${no++} ➳ ${prefix}balikangka
 ${no++} ➳ ${prefix}besarkecil
 ${no++} ➳ ${prefix}bilangangka

 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
 ${no++} ➳ ${prefix}tiktok
 ${no++} ➳ ${prefix}ytmp3
 ${no++} ➳ ${prefix}ytmp4
 ${no++} ➳ ${prefix}pinterest
 ${no++} ➳ ${prefix}mediafire
 ${no++} ➳ ${prefix}wikimedia
 ${no++} ➳ ${prefix}soundcloud

 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}tts
 ${no++} ➳ ${prefix}toimg
 ${no++} ➳ ${prefix}toimage
 ${no++} ➳ ${prefix}tomp3
 ${no++} ➳ ${prefix}toaudio
 ${no++} ➳ ${prefix}tomp4
 ${no++} ➳ ${prefix}tovideo
 ${no++} ➳ ${prefix}emojimix
 ${no++} ➳ ${prefix}emojmix
 ${no++} ➳ ${prefix}emojinua
 ${no++} ➳ ${prefix}mixemoji
 ${no++} ➳ ${prefix}stiker
 ${no++} ➳ ${prefix}sticker
 ${no++} ➳ ${prefix}swm
 ${no++} ➳ ${prefix}stikerwm
 ${no++} ➳ ${prefix}stickerwm
 ${no++} ➳ ${prefix}smeme
 ${no++} ➳ ${prefix}memestiker
 ${no++} ➳ ${prefix}stikermeme
 ${no++} ➳ ${prefix}stickermeme
 ${no++} ➳ ${prefix}takesticker
 ${no++} ➳ ${prefix}emojinua2
 ${no++} ➳ ${prefix}mixemoji2
 ${no++} ➳ ${prefix}emojmix2
 ${no++} ➳ ${prefix}emojimix2

 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}translate

 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}buatroom 628xxx
 ${no++} ➳ ${prefix}room <only owner>
 ${no++} ➳ ${prefix}stopchat <only room>
 ${no++} ➳ ${prefix}menfess 628xx|bot|hai

 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 
 ${no++} ➳ ${prefix}fat
 ${no++} ➳ ${prefix}fast
 ${no++} ➳ ${prefix}slow
 ${no++} ➳ ${prefix}bass
 ${no++} ➳ ${prefix}deep
 ${no++} ➳ ${prefix}tupai
 ${no++} ➳ ${prefix}robot
 ${no++} ➳ ${prefix}blown
 ${no++} ➳ ${prefix}smooth
 ${no++} ➳ ${prefix}earrape
 ${no++} ➳ ${prefix}reverse

 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}milf
 ${no++} ➳ ${prefix}loli
 ${no++} ➳ ${prefix}wallml
 ${no++} ➳ ${prefix}waifu
 ${no++} ➳ ${prefix}husbu
 ${no++} ➳ ${prefix}cosplay
 ${no++} ➳ ${prefix}ppcouple
 ${no++} ➳ ${prefix}wallpaperislami
 ${no++} ➳ ${prefix}wallpaperinori
 ${no++} ➳ ${prefix}wallpaperanime
 ${no++} ➳ ${prefix}wallpapergamer
 ${no++} ➳ ${prefix}wallpapermeme
 ${no++} ➳ ${prefix}wallpaperprogamer
 ${no++} ➳ ${prefix}wallpaperteknologi
 ${no++} ➳ ${prefix}wallpapercyber

 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 
 ${no++} ➳ ${prefix}cry
 ${no++} ➳ ${prefix}hug
 ${no++} ➳ ${prefix}pat
 ${no++} ➳ ${prefix}bully
 ${no++} ➳ ${prefix}lick
 ${no++} ➳ ${prefix}kiss
 ${no++} ➳ ${prefix}awoo
 ${no++} ➳ ${prefix}waifu
 ${no++} ➳ ${prefix}shinobu
 ${no++} ➳ ${prefix}cuddle
 ${no++} ➳ ${prefix}megumin
 ${no++} ➳ ${prefix}slap
 ${no++} ➳ ${prefix}neko
 ${no++} ➳ ${prefix}wink
 ${no++} ➳ ${prefix}dance
 ${no++} ➳ ${prefix}poke
 ${no++} ➳ ${prefix}glomp
 ${no++} ➳ ${prefix}bite
 ${no++} ➳ ${prefix}nom
 ${no++} ➳ ${prefix}handhold
 ${no++} ➳ ${prefix}highfive
 ${no++} ➳ ${prefix}wave
 ${no++} ➳ ${prefix}smug
 ${no++} ➳ ${prefix}smile
 ${no++} ➳ ${prefix}bonk

 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: -
A/N: __

*Payment Dana*
Number: -
A/N: xlucifer

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Xlucifer
 • *Nama:* Xiart

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* -
 • *Youtube:* -
 • *Github:* -
 `
}
