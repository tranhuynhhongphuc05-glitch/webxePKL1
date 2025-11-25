<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chi tiết xe PKL</title>
<style>
    /* ================= BODY ================= */
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background: linear-gradient(180deg, #0a0a0a, #111);
        color: #e8edf7;
    }

    /* ================= CONTAINER ================= */
    #detail {
        max-width: 700px;
        margin: 40px auto;
        background: rgba(255,255,255,0.03);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.7);
        text-align: center;
        border:1px solid rgba(255,255,255,0.05);
        transition: transform 0.3s;
    }
    #detail:hover { transform: scale(1.02); }

    /* ================= IMAGE ================= */
    #detail img {
        width: 80%;
        max-height: 400px;
        border-radius: 15px;
        margin: 20px 0;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0,0,0,0.7);
        transition: transform 0.4s, filter 0.4s;
    }
    #detail img:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
    }

    /* ================= TEXT ================= */
    #detail h2 {
        font-size: 28px;
        margin-bottom: 15px;
        color: #ff1e28;
        text-shadow: 0 0 12px rgba(255,30,30,0.6);
    }
    #detail p {
        font-size: 18px;
        margin: 8px 0;
    }
    #detail p b {
        color: #4cc9ff;
    }

    /* ================= BUTTON ================= */
    .button {
        display: inline-block;
        padding: 12px 25px;
        background: linear-gradient(90deg,#ff1e28,#b30000);
        color: #fff;
        text-decoration: none;
        border-radius: 12px;
        margin-top: 20px;
        font-weight: 700;
        box-shadow: 0 8px 25px rgba(255,0,0,0.5);
        transition: transform 0.3s, filter 0.3s;
    }
    .button:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
    }

    /* ================= RESPONSIVE ================= */
    @media(max-width: 768px){
        #detail img { width: 100%; height:auto; }
        #detail { padding:20px; }
    }
</style>
</head>
<body>

<div id="detail"></div>

<script>
    // ================= DỮ LIỆU XE =================
    const bikes = {
        r1: {name:"Yamaha R1", brand:"Yamaha", price:"600.000.000 VNĐ", engine:"998cc, 200HP", weight:"199 kg", img:"img/r1.jpg", link:"https://www.yamaha-motor.com"},
        cbr: {name:"Honda CBR1000RR", brand:"Honda", price:"700.000.000 VNĐ", engine:"1000cc, 215HP", weight:"201 kg", img:"img/cbr1000.jpg", link:"https://www.honda.com"},
        zx10r: {name:"Kawasaki ZX-10R", brand:"Kawasaki", price:"580.000.000 VNĐ", engine:"998cc, 203HP", weight:"206 kg", img:"img/zx10r.jpg", link:"https://www.kawasaki.com"},
        harley1: {name:"Harley-Davidson Fat Boy", brand:"Harley-Davidson", price:"900.000.000 VNĐ", engine:"1868cc Milwaukee-Eight", weight:"317 kg", img:"img/harley1.jpg", link:"https://www.harley-davidson.com"},
        bmw1: {name:"BMW S1000RR", brand:"BMW", price:"820.000.000 VNĐ", engine:"999cc, 205HP", weight:"197 kg", img:"img/bmw1.jpg", link:"https://www.bmwmotorcycles.com"},
        ducati1: {name:"Ducati Panigale V4", brand:"Ducati", price:"1.200.000.000 VNĐ", engine:"1103cc, 214HP", weight:"198 kg", img:"img/ducati1.jpg", link:"https://www.ducati.com"},
        ducati2: {name:"Ducati Streetfighter V4", brand:"Ducati", price:"1.050.000.000 VNĐ", engine:"1103cc, 208HP", weight:"201 kg", img:"img/ducati2.jpg", link:"https://www.ducati.com"}
    };

    // ================= LẤY ID XE TỪ URL =================
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const detailEl = document.getElementById("detail");

    // ================= HIỂN THỊ THÔNG TIN XE =================
    if(id && bikes[id]){
        const b = bikes[id];
        detailEl.innerHTML = `
            <h2>${b.name}</h2>
            <img src="${b.img}" alt="${b.name}">
            <p><b>Hãng:</b> ${b.brand}</p>
            <p><b>Dung tích:</b> ${b.engine}</p>
            <p><b>Trọng lượng:</b> ${b.weight}</p>
            <p><b>Giá:</b> ${b.price}</p>
            <a class="button" href="${b.link}" target="_blank">Trang hãng xe</a>
        `;
    } else {
        detailEl.innerHTML = "<p style='font-size:20px;color:#ff4c4c;text-shadow:0 0 8px #ff1e28;'>Xe không tồn tại!</p>";
    }
</script>

</body>
</html>
