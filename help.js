
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`

βββ Happy -π½ππ βββ

 π¨π¦ππ₯ ππ‘ππ’
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 ππ’π§ ππ‘ππ’
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}
 Fitur : +

 ππΌππ ππππ 
 ${no++} β³ ${prefix}menu
 ${no++} β³ ${prefix}rules
 ${no++} β³ ${prefix}owner
 ${no++} β³ ${prefix}ownerinfo
 ${no++} β³ ${prefix}infoowner

 πππππ ππππ 
 ${no++} β³ ${prefix}kali 1 2
 ${no++} β³ ${prefix}bagi 1 2
 ${no++} β³ ${prefix}kurang 1 2
 ${no++} β³ ${prefix}tambah 1 2
 ${no++} β³ ${prefix}dellist key
 ${no++} β³ ${prefix}addlist key@response
 ${no++} β³ ${prefix}update key@response
 ${no++} β³ ${prefix}done <reply orderan>
 ${no++} β³ ${prefix}proses <reply orderan>
 ${no++} β³ ${prefix}list <only group>
 ${no++} β³ ${prefix}shop <only group>

 ππππππΏ ππππ 
 ${no++} β³ ${prefix}pricelist <layanan>
 ${no++} β³ ${prefix}order <cara order>
 ${no++} β³ ${prefix}like jumlah|target
 ${no++} β³ ${prefix}view jumlah|target
 ${no++} β³ ${prefix}follower jumlah|username
 ${no++} β³ ${prefix}cekstatus <idtrx>
 ${no++} β³ ${prefix}komisi <owner only>
 ${no++} β³ ${prefix}tarikkomisi <owner only>

 ππππ ππππ 
 ${no++} β³ ${prefix}verify
 ${no++} β³ ${prefix}donasi
 ${no++} β³ ${prefix}sewabot
 ${no++} β³ ${prefix}menfess
 ${no++} β³ ${prefix}buatroom
 ${no++} β³ ${prefix}secretchat
 ${no++} β³ ${prefix}cekprem
 ${no++} β³ ${prefix}daftarprem
 ${no++} β³ ${prefix}changename

 πππππ ππππ 
 ${no++} β³ ${prefix}delete
 ${no++} β³ ${prefix}revoke
 ${no++} β³ ${prefix}tagall
 ${no++} β³ ${prefix}hidetag
 ${no++} β³ ${prefix}setdesc
 ${no++} β³ ${prefix}linkgrup
 ${no++} β³ ${prefix}infogroup
 ${no++} β³ ${prefix}setnamegrup
 ${no++} β³ ${prefix}group open
 ${no++} β³ ${prefix}group close
 ${no++} β³ ${prefix}antilink on
 ${no++} β³ ${prefix}antilink off
 ${no++} β³ ${prefix}welcome on
 ${no++} β³ ${prefix}welcome off
 ${no++} β³ ${prefix}tiktokauto on
 ${no++} β³ ${prefix}tiktokauto off
 ${no++} β³ ${prefix}kick @tag
 ${no++} β³ ${prefix}demote @tag
 ${no++} β³ ${prefix}promote @tag
 
 πΏππππππΌπΏ ππππ
 (ytmp4 durasi jangan panjang 
 ytmp3 gagal? ganti link)
 ${no++} β³ ${prefix}tiktok
 ${no++} β³ ${prefix}ytmp3
 ${no++} β³ ${prefix}ytmp4
 ${no++} β³ ${prefix}gitclone

 πΎππππππ ππππ 
 ${no++} β³ ${prefix}toimg
 ${no++} β³ ${prefix}tomp3
 ${no++} β³ ${prefix}tomp4
 ${no++} β³ ${prefix}s
 ${no++} β³ ${prefix}swm
 ${no++} β³ ${prefix}smeme
 ${no++} β³ ${prefix}takesticker

 πΌππππππππ ππππ 
 (untuk nomor tanpa (+ dan - hanya nomor))
 ${no++} β³ ${prefix}buatroom 628xxx
 ${no++} β³ ${prefix}room <only owner>
 ${no++} β³ ${prefix}stopchat <only room>
 ${no++} β³ ${prefix}menfess 628xx|bot|hai

 
 `
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* *.menu* *!menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`ββγ *MENU DONATE* γββ

Hi *${cekName}* ${ucapanWaktu} ππ»

*Payment pulsa*
Number: -
A/N: __

*Payment Dana*
Number: 083153238595
A/N: xlucifer

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama:* Xlucifer
 β’ *Nama:* Xiart

_iam developer bot whatsapp._

 *Sosial Media*
 β’ *Whatsapp:* -
 β’ *Youtube:* -
 β’ *Github:* -
 `
}
