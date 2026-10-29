// หนังสือเรียนภาษามลายู ชั้น อต.2
module.exports = {
  grade: 2,
  lede: "ต่อยอดจากชั้นปีที่ 1 ด้วยสระประสม สระ e สองเสียง พยัญชนะประสม ประโยคคำสั่ง การแนะนำตนเอง และคำศัพท์ในชีวิตประจำวัน 10 บท ทุกบทฟังเสียงคำศัพท์ได้ มีแบบฝึกหัดพร้อมเฉลย และแบบทดสอบตนเอง ใช้ภาษามลายูมาตรฐานทั้งเล่ม",
  preface: [
    "หนังสือเรียนภาษามลายูเล่มนี้จัดทำขึ้นสำหรับผู้เรียนชั้นปีที่ 2 หลักสูตรอิสลามศึกษาตอนต้น (อต.2) ต่อยอดจากชั้นปีที่ 1 โดยเน้นการออกเสียงสระประสม เสียงสระ e สองเสียง และพยัญชนะประสม การใช้ประโยคคำสั่งในห้องเรียน ประโยคบอกเล่า และการแนะนำตนเอง พร้อมคำศัพท์ง่าย ๆ ในชีวิตประจำวัน",
    "เนื้อหาแบ่งเป็น 10 บท แต่ละบทมีจุดประสงค์การเรียนรู้ เนื้อหา แบบฝึกหัด และข้อคิด ท้ายเล่มมีอภิธานศัพท์และเฉลยแบบฝึกหัด ภาษาที่ใช้เป็นภาษามลายูมาตรฐาน (Bahasa Melayu Standard) ทั้งหมด",
  ],
  indicators: [
    "ค้นหาและบอกสระประสม คำควบกล้ำ สระที่มีสองเสียงและพยัญชนะประสมจากการฟัง",
    "ออกเสียงสระที่มีสองเสียงและพยัญชนะประสมที่กำหนด",
    "อ่านและเขียนสระประสม สระที่มีสองเสียง พยัญชนะประสม และคำศัพท์ที่กำหนด",
    "ยกตัวอย่างสระประสมและสระที่มีสองเสียง",
    "พูดโต้ตอบและปฏิบัติตามประโยคคำสั่งและประโยคบอกเล่าที่กำหนด",
    "เห็นคุณค่าและความสำคัญในการใช้ภาษามลายูที่กำหนด",
  ],
  units: [
    {
      title: "Diftong", th: "สระประสม", indicators: [1, 2, 3, 4, 6],
      objectives: ["บอกสระประสม ai, au, oi จากการฟังได้", "อ่านและเขียนคำที่มีสระประสมทั้งอักษรรูมีและยาวีได้", "ยกตัวอย่างคำที่มีสระประสมได้"],
      sections: [
        { title: "Diftong ai, au, oi  สระประสม", blocks: [
          { type: "p", text: "**Diftong** คือสระสองตัวที่ออกเสียงต่อกันในพยางค์เดียว ภาษามลายูมีสระประสม 3 ตัว คือ **ai**, **au** และ **oi**" },
          { type: "table", head: ["Diftong", "เสียง", "ตัวอย่างคำ", "ความหมาย"], widths: [1500, 1600, 3300, 2960], sizes: [40], align: ["center"], rows: [
            ["ai", "/ไอ/", "**santai**  ·  **pantai**  ·  **sungai**", "สบาย ๆ  ·  ชายหาด  ·  แม่น้ำ"],
            ["au", "/เอา/", "**pulau**  ·  **kerbau**  ·  **harimau**", "เกาะ  ·  ควาย  ·  เสือ"],
            ["oi", "/ออย/", "**amboi**  ·  **dodoi**", "อุทานแสดงความแปลกใจ  ·  เพลงกล่อมเด็ก"],
          ] },
        ] },
        { title: "Diftong dalam tulisan Jawi  สระประสมในอักษรยาวี", blocks: [
          { type: "p", text: "ในอักษรยาวี เสียง **ai** เขียนด้วย اي และเสียง **au** เขียนด้วย او ที่ท้ายคำ" },
          { type: "vocab", rows: [["pulau", "ڤولاو", "เกาะ"], ["kerbau", "کرباو", "ควาย"], ["harimau", "هاريماو", "เสือ"], ["santai", "سنتاي", "สบาย ๆ"], ["pantai", "ڤنتاي", "ชายหาด"], ["sungai", "سوڠاي", "แม่น้ำ"]] },
          { type: "note", title: "ครูควรรู้", lines: ["คำอย่าง **dia**, **buaya**, **kuih** มีสระสองตัวอยู่ติดกัน (ia, ua, ui) แต่ออกเสียง **คนละพยางค์** เช่น di–a, bu–a–ya จึงไม่นับเป็นสระประสม เรียกว่า *vokal berganding* (สระเรียงกัน)"] },
        ] },
      ],
      latihan: [
        { q: "ฟังครูอ่านคำ แล้วบอกว่ามีสระประสมใด (ai / au / oi)", items: ["pulau  →  ____", "pantai  →  ____", "amboi  →  ____", "kerbau  →  ____", "sungai  →  ____"], answers: "au, ai, oi, au, ai" },
        { q: "เติมสระประสมให้เป็นคำที่ถูกต้อง", items: ["pul____  (เกาะ)", "sung____  (แม่น้ำ)", "harim____  (เสือ)", "pant____  (ชายหาด)"], answers: "pulau, sungai, harimau, pantai" },
        { q: "ยกตัวอย่างคำที่มีสระประสม ai และ au อย่างละ 2 คำ", lines: 2 },
      ],
      nilai: "ทะเล เกาะ และแม่น้ำเป็นความงามที่อัลลอฮ์ทรงสร้าง เราควรช่วยกันรักษาให้สะอาด",
    },
    {
      title: "Huruf E Dua Bunyi", th: "สระ e สองเสียง", indicators: [1, 2, 3, 4, 6],
      objectives: ["บอกความแตกต่างของ e pepet และ e taling ได้", "ออกเสียงคำที่มี e ทั้งสองเสียงได้ถูกต้อง"],
      sections: [
        { title: "E pepet dan e taling", blocks: [
          { type: "p", text: "ตัวอักษร **e** ในภาษามลายูออกเสียงได้ 2 แบบ ต้องจำจากคำแต่ละคำ" },
          { type: "table", head: ["ชื่อ", "เสียง", "ตัวอย่างคำ", "ความหมาย"], widths: [1700, 1500, 3200, 2960], bolds: [true], rows: [
            ["e pepet", "/เออ/", "**emak**  ·  **emas**  ·  **sepuluh**  ·  **besar**", "แม่  ·  ทอง  ·  สิบ  ·  ใหญ่"],
            ["e taling", "/เอ/", "**enak**  ·  **esok**  ·  **sate**  ·  **meja**", "อร่อย  ·  พรุ่งนี้  ·  สะเต๊ะ  ·  โต๊ะ"],
          ] },
          { type: "pattern", title: "ฝึกอ่านคู่คำ", lines: ["**emak** (เออ)  —  **enak** (เอ)", "**sepuluh** (เออ)  —  **sate** (เอ)", "**besar** (เออ)  —  **meja** (เอ)"] },
        ] },
      ],
      latihan: [
        { q: "ฟังครูอ่าน แล้วบอกว่า e ในคำเป็นเสียง เออ (pepet) หรือ เอ (taling)", items: ["emas  ( ______ )", "esok  ( ______ )", "besar  ( ______ )", "sate  ( ______ )", "sepuluh  ( ______ )"], answers: "pepet, taling, pepet, taling, pepet" },
        { q: "ยกตัวอย่างคำที่มี e pepet 2 คำ และ e taling 2 คำ", lines: 2 },
        { q: "อ่านประโยคให้เพื่อนฟัง", items: ["Emak masak sate. Sate itu enak.", "Esok saya ke sekolah."] },
      ],
      nilai: "การออกเสียงให้ถูกต้องทำให้ความหมายถูกต้อง เราจึงควรฝึกฟังและพูดอย่างตั้งใจ",
    },
    {
      title: "Gugusan Konsonan", th: "พยัญชนะประสม", indicators: [1, 2, 3, 6],
      objectives: ["ออกเสียงพยัญชนะประสม kh, gh, sy, ng, ny ได้ถูกต้อง", "อ่านและเขียนคำที่มีพยัญชนะประสมได้"],
      sections: [
        { title: "Lima gugusan konsonan  พยัญชนะประสม 5 ตัว", blocks: [
          { type: "table", head: ["พยัญชนะ", "Jawi", "เสียง", "ตัวอย่างคำ"], widths: [1400, 1300, 2600, 4060], sizes: [40, 48], align: ["center", "center"], rows: [
            ["kh", "خ", "/ค/ ขูดในลำคอ", "**khabar**  ข่าว  ·  **akhir**  สุดท้าย"],
            ["gh", "غ", "/ฆ/ ก้องในลำคอ", "**ghaib**  สิ่งเร้นลับ  ·  **maghrib**  มัฆริบ"],
            ["sy", "ش", "/ช/", "**syukur**  ขอบคุณอัลลอฮ์  ·  **syarat**  เงื่อนไข"],
            ["ng", "ڠ", "/ง/", "**nganga**  อ้าปาก  ·  **bunga**  ดอกไม้"],
            ["ny", "ڽ", "/ญ/", "**nyanyi**  ร้องเพลง  ·  **banyak**  มาก"],
          ] },
          { type: "vocab", rows: [["khabar", "خبر", "ข่าว"], ["maghrib", "مغرب", "เวลามัฆริบ"], ["syukur", "شکور", "ขอบคุณอัลลอฮ์"], ["bunga", "بوڠا", "ดอกไม้"], ["nyanyi", "ڽاڽي", "ร้องเพลง"]] },
          { type: "note", title: "สังเกต", lines: ["คำที่มี **kh**, **gh**, **sy** ส่วนมากมาจากภาษาอาหรับ เช่น *akhirat*, *ghaib*, *syahadah* จึงพบบ่อยในคำศัพท์ศาสนา"] },
        ] },
      ],
      latihan: [
        { q: "ฟังครูอ่าน แล้วเขียนพยัญชนะประสมที่ได้ยิน", items: ["____abar", "ma____rib", "____ukur", "bu____a", "ba____ak"], answers: "kh, gh, sy, ng, ny" },
        { q: "จับคู่พยัญชนะประสมกับอักษรยาวี", table: { head: ["Rumi", "Jawi"], widths: [4680, 4680], rows: [["1) kh", "ก.  ش"], ["2) sy", "ข.  ڠ"], ["3) ng", "ค.  خ"], ["4) ny", "ง.  ڽ"]] }, answers: "1–ค, 2–ก, 3–ข, 4–ง" },
        { q: "อ่านประโยค", items: ["Kita bersyukur kepada Allah.", "Kami solat maghrib di masjid."] },
      ],
      nilai: "คำว่า syukur สอนให้เราขอบคุณอัลลอฮ์ในทุกความโปรดปรานที่ได้รับ",
    },
    {
      title: "Ayat Perintah di Kelas", th: "ประโยคคำสั่งในห้องเรียน", indicators: [5, 6],
      objectives: ["ฟังและปฏิบัติตามประโยคคำสั่งในห้องเรียนได้", "พูดประโยคคำสั่งอย่างสุภาพด้วย sila และ tolong ได้"],
      sections: [
        { title: "Ayat perintah  ประโยคคำสั่ง", blocks: [
          { type: "vocab", noJawi: true, rows: [
            ["Sila duduk.", "เชิญนั่ง"], ["Sila berdiri.", "เชิญยืน"], ["Buka buku.", "เปิดหนังสือ"], ["Tutup buku.", "ปิดหนังสือ"],
            ["Angkat tangan.", "ยกมือ"], ["Dengar baik-baik.", "ฟังให้ดี"], ["Baca bersama-sama.", "อ่านพร้อมกัน"], ["Tulis nama kamu.", "เขียนชื่อของเธอ"],
            ["Tolong jangan bising.", "กรุณาอย่าส่งเสียงดัง"], ["Tolong tutup pintu.", "ช่วยปิดประตูหน่อย"],
          ] },
          { type: "pattern", title: "คำที่ทำให้คำสั่งสุภาพ", lines: ["**Sila** + กริยา  →  เชิญ... (ใช้เชิญอย่างสุภาพ)  เช่น Sila masuk.", "**Tolong** + กริยา  →  ช่วย... / กรุณา...  เช่น Tolong buka tingkap.", "**Jangan** + กริยา  →  อย่า...  เช่น Jangan berlari."] },
        ] },
        { title: "Permainan \"Cikgu kata\"  เกม \"ครูบอกว่า\"", blocks: [
          { type: "p", text: "ครูพูดคำสั่ง นักเรียนทำตามเฉพาะเมื่อครูขึ้นต้นด้วย \"Cikgu kata\" เช่น **Cikgu kata, angkat tangan!**" },
        ] },
      ],
      latihan: [
        { q: "เขียนความหมายของประโยคคำสั่ง", items: ["Sila duduk.  ________", "Buka buku.  ________", "Tolong jangan bising.  ________", "Angkat tangan.  ________"], answers: "เชิญนั่ง, เปิดหนังสือ, กรุณาอย่าส่งเสียงดัง, ยกมือ" },
        { q: "เติม sila, tolong หรือ jangan", items: ["______ masuk, Encik.", "______ berlari di dalam kelas.", "______ tutup pintu itu."], answers: "Sila, Jangan, Tolong" },
        { q: "จับคู่กับเพื่อน ผลัดกันสั่งและทำตามคำสั่ง 5 ประโยค" },
      ],
      nilai: "การใช้คำว่า sila และ tolong แสดงถึงมารยาทที่ดี ท่านนบีสอนให้เราพูดจาสุภาพกับทุกคน",
    },
    {
      title: "Ayat Penyata dan Memperkenalkan Diri", th: "ประโยคบอกเล่าและการแนะนำตนเอง", indicators: [5, 6],
      objectives: ["พูดประโยคบอกเล่าเกี่ยวกับตนเองได้", "แนะนำตนเองเป็นภาษามลายูมาตรฐานได้ 4–5 ประโยค"],
      sections: [
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Saya Aminah", paras: ["Assalamualaikum. Nama saya Aminah. Saya berumur lapan tahun. Saya tinggal di Pattani.", "Saya belajar di Tadika Darul Ulum. Saya suka membaca buku. Terima kasih."] },
          { type: "vocab", noJawi: true, rows: [["Nama saya ...", "ฉันชื่อ ..."], ["Saya berumur ... tahun.", "ฉันอายุ ... ปี"], ["Saya tinggal di ...", "ฉันอาศัยอยู่ที่ ..."], ["Saya belajar di ...", "ฉันเรียนที่ ..."], ["Saya suka ...", "ฉันชอบ ..."], ["Terima kasih.", "ขอบคุณ"]] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [["Hasan", "Assalamualaikum. Siapa nama kamu?"], ["Aminah", "Waalaikumussalam. Nama saya Aminah. Nama kamu?"], ["Hasan", "Nama saya Hasan. Kamu tinggal di mana?"], ["Aminah", "Saya tinggal di Pattani."], ["Hasan", "Selamat berkenalan, Aminah."]] },
          { type: "note", title: "ประโยคบอกเล่า (ayat penyata)", lines: ["ประโยคบอกเล่าใช้บอกข้อมูล ลงท้ายด้วยมหัพภาค ( . ) เช่น *Saya tinggal di Yala.*"] },
        ] },
      ],
      latihan: [
        { q: "เติมคำให้ถูกต้อง  [ berumur · tinggal · nama · suka ]", items: ["______ saya Hasan.", "Saya ______ sembilan tahun.", "Saya ______ di Narathiwat.", "Saya ______ bermain bola."], answers: "Nama, berumur, tinggal, suka" },
        { q: "เขียนแนะนำตนเอง 4 ประโยค", lines: 4 },
        { q: "ออกมาแนะนำตนเองหน้าชั้นเรียน" },
      ],
      nilai: "การแนะนำตนเองด้วยการให้สลามและยิ้มแย้มทำให้ได้เพื่อนใหม่และสร้างความรักระหว่างกัน",
    },
    {
      title: "Kawan Saya", th: "เพื่อนของฉัน", indicators: [3, 5, 6],
      objectives: ["อ่านและเขียนคำศัพท์เกี่ยวกับเพื่อนได้", "พูดบอกเล่าเกี่ยวกับเพื่อนด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["kawan / rakan", "เพื่อน"], ["baik hati", "ใจดี"], ["rajin", "ขยัน"], ["peramah", "เป็นมิตร ยิ้มแย้ม"], ["bermain", "เล่น"], ["bersama-sama", "ด้วยกัน"], ["menolong", "ช่วยเหลือ"], ["berkongsi", "แบ่งปัน"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Kawan Baik Saya", paras: ["Ini kawan saya. Namanya Ali. Ali baik hati dan rajin.", "Kami belajar bersama-sama. Kami bermain bola bersama-sama. Ali suka menolong kawan.", "Saya sayang kawan saya."] },
        ] },
      ],
      latihan: [
        { q: "ตอบคำถามจากเรื่อง", items: ["Siapa nama kawan saya?  ________", "Ali bagaimana?  ________", "Kami bermain apa?  ________"], answers: "Ali; baik hati dan rajin; bola" },
        { q: "เขียนความหมาย", items: ["rajin  ________", "menolong  ________", "berkongsi  ________"], answers: "ขยัน, ช่วยเหลือ, แบ่งปัน" },
        { q: "เขียนเรื่องเพื่อนของตนเอง 3 ประโยค (Ini kawan saya. Namanya ...)", lines: 3 },
      ],
      nilai: "เพื่อนที่ดีชวนกันทำความดี ช่วยเหลือกัน และแบ่งปันกัน",
    },
    {
      title: "Di Perpustakaan", th: "ห้องสมุด", indicators: [3, 5, 6],
      objectives: ["อ่านและเขียนคำศัพท์เกี่ยวกับห้องสมุดได้", "ปฏิบัติตามคำสั่งและข้อปฏิบัติในห้องสมุดได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["perpustakaan", "ห้องสมุด"], ["buku cerita", "หนังสือนิทาน"], ["rak buku", "ชั้นหนังสือ"], ["pustakawan", "บรรณารักษ์"], ["meminjam", "ยืม"], ["memulangkan", "คืน"], ["membaca", "อ่าน"], ["senyap", "เงียบ"]] },
        ] },
        { title: "Peraturan perpustakaan  ข้อปฏิบัติในห้องสมุด", blocks: [
          { type: "bullets", items: ["Sila senyap.  (กรุณาเงียบ)", "Jangan makan di dalam perpustakaan.  (ห้ามรับประทานอาหารในห้องสมุด)", "Letak buku di atas rak.  (วางหนังสือไว้บนชั้น)", "Jaga buku dengan baik.  (ดูแลหนังสือให้ดี)"] },
          { type: "dialog", lines: [["Murid", "Assalamualaikum, cikgu. Saya mahu meminjam buku ini."], ["Pustakawan", "Waalaikumussalam. Boleh. Tolong pulangkan pada hari Isnin."], ["Murid", "Baik, cikgu. Terima kasih."]] },
        ] },
      ],
      latihan: [
        { q: "เขียนคำภาษามลายู", items: ["ห้องสมุด  ________", "ยืม  ________", "เงียบ  ________", "ชั้นหนังสือ  ________"], answers: "perpustakaan, meminjam, senyap, rak buku" },
        { q: "ถูก (✓) หรือผิด (✗) ตามข้อปฏิบัติในห้องสมุด", items: ["Saya makan di dalam perpustakaan.  ( ___ )", "Saya membaca dengan senyap.  ( ___ )", "Saya menjaga buku dengan baik.  ( ___ )"], answers: "✗, ✓, ✓" },
        { q: "แสดงบทบาทสมมุติการยืมหนังสือกับเพื่อน" },
      ],
      nilai: "คำแรกที่ประทานลงมาในอัลกุรอานคือ \"อิกเราะอ์\" (จงอ่าน) การอ่านจึงเป็นสิ่งสำคัญสำหรับมุสลิม",
    },
    {
      title: "Haiwan dan Buah-buahan", th: "สัตว์และผลไม้", indicators: [3, 5, 6],
      objectives: ["อ่านและเขียนชื่อสัตว์และผลไม้ทั้งอักษรรูมีและยาวีได้", "บอกสัตว์และผลไม้ที่ชอบด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Haiwan  สัตว์", blocks: [
          { type: "vocab", rows: [["kucing", "کوچيڠ", "แมว"], ["ayam", "ايم", "ไก่"], ["lembu", "لمبو", "วัว"], ["kambing", "کمبيڠ", "แพะ"], ["itik", "ايتيق", "เป็ด"], ["burung", "بوروڠ", "นก"], ["ikan", "ايکن", "ปลา"]] },
        ] },
        { title: "Buah-buahan  ผลไม้", blocks: [
          { type: "vocab", rows: [["pisang", "ڤيسڠ", "กล้วย"], ["durian", "دورين", "ทุเรียน"], ["rambutan", "رمبوتن", "เงาะ"], ["manggis", "مڠݢيس", "มังคุด"], ["betik", "بيتيق", "มะละกอ"], ["kelapa", "کلاڤ", "มะพร้าว"], ["tembikai", "تمبيکاي", "แตงโม"]] },
          { type: "pattern", lines: ["Saya **suka** + ผลไม้  →  Saya suka **manggis**.", "Saya **ada** + สัตว์  →  Saya ada **seekor kucing**."] },
        ] },
      ],
      latihan: [
        { q: "จัดกลุ่มคำ: สัตว์ (haiwan) หรือ ผลไม้ (buah)", items: ["lembu  ________", "rambutan  ________", "itik  ________", "betik  ________"], answers: "haiwan, buah, haiwan, buah" },
        { q: "จับคู่อักษรรูมีกับยาวี", table: { head: ["Rumi", "Jawi"], widths: [4680, 4680], rows: [["1) kucing", "ก.  ڤيسڠ"], ["2) pisang", "ข.  ايکن"], ["3) ikan", "ค.  کوچيڠ"]] }, answers: "1–ค, 2–ก, 3–ข" },
        { q: "เขียนประโยค \"Saya suka ...\" เกี่ยวกับผลไม้ที่ชอบ 2 ประโยค", lines: 2 },
      ],
      nilai: "สัตว์และผลไม้เป็นริซกีจากอัลลอฮ์ เราควรเลี้ยงสัตว์ด้วยความเมตตาและกินผลไม้ด้วยการกล่าวบิสมิลลาฮ์",
    },
    {
      title: "Mainan", th: "ของเล่น", indicators: [3, 5, 6],
      objectives: ["อ่านและเขียนชื่อของเล่นได้", "พูดชวนเพื่อนเล่นด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["mainan", "ของเล่น"], ["bola", "ลูกบอล"], ["layang-layang / wau", "ว่าว"], ["gasing", "ลูกข่าง"], ["guli", "ลูกแก้ว"], ["anak patung", "ตุ๊กตา"], ["kereta mainan", "รถของเล่น"], ["congkak", "หมากขุม"]] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [["Amin", "Mari kita bermain wau!"], ["Hafiz", "Mari! Tetapi kita solat asar dahulu."], ["Amin", "Baik. Selepas solat, kita bermain di padang."]] },
          { type: "pattern", lines: ["**Mari kita** + กริยา  →  Mari kita bermain!  (มาเล่นกันเถอะ)"] },
        ] },
      ],
      latihan: [
        { q: "เขียนคำภาษามลายู", items: ["ว่าว  ________", "ลูกข่าง  ________", "ตุ๊กตา  ________", "ลูกบอล  ________"], answers: "wau / layang-layang, gasing, anak patung, bola" },
        { q: "เรียงคำเป็นประโยค", items: ["bermain / kita / mari / bola  →  ____________________"], answers: "Mari kita bermain bola." },
        { q: "วาดรูปของเล่นที่ชอบ แล้วเขียนชื่อเป็นภาษามลายู", lines: 1 },
      ],
      nilai: "เล่นได้แต่อย่าลืมเวลาละหมาดและการบ้าน และควรแบ่งของเล่นให้เพื่อนเล่นด้วย",
    },
    {
      title: "Air", th: "น้ำ", indicators: [3, 5, 6],
      objectives: ["อ่านและเขียนคำศัพท์เกี่ยวกับน้ำได้", "บอกประโยชน์ของน้ำและการใช้น้ำอย่างประหยัดได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["air", "اير", "น้ำ"], ["minum", "مينوم", "ดื่ม"], ["mandi", "مندي", "อาบน้ำ"], ["wuduk", "وضوء", "การอาบน้ำละหมาด"], ["sungai", "سوڠاي", "แม่น้ำ"], ["hujan", "هوجن", "ฝน"], ["bersih", "برسيه", "สะอาด"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Air Untuk Kita", paras: ["Kita minum air setiap hari. Kita mandi dengan air bersih.", "Sebelum solat, kita mengambil wuduk dengan air. Kita mesti menjimatkan air.", "Tutup paip selepas menggunakannya."] },
          { type: "note", title: "คำใหม่", lines: ["**menjimatkan** = ประหยัด   •   **paip** = ก๊อกน้ำ   •   **mengambil wuduk** = อาบน้ำละหมาด"] },
        ] },
      ],
      latihan: [
        { q: "ตอบคำถามจากเรื่อง", items: ["Kita mandi dengan air apa?  ________", "Sebelum solat, kita mengambil apa?  ________", "Selepas menggunakan paip, kita mesti ________ paip."], answers: "air bersih; wuduk; tutup" },
        { q: "จับคู่คำกับความหมาย", items: ["air  —  ____", "hujan  —  ____", "minum  —  ____"], answers: "น้ำ, ฝน, ดื่ม" },
        { q: "เขียนวิธีประหยัดน้ำ 2 ข้อเป็นภาษาไทยหรือภาษามลายู", lines: 2 },
      ],
      nilai: "ท่านนบีสอนไม่ให้ใช้น้ำฟุ่มเฟือยแม้ขณะอาบน้ำละหมาดริมแม่น้ำ เราจึงควรใช้น้ำอย่างประหยัด",
    },
  ],
};
