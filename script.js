
const arrPPOB = [
    {
      href: "https://waroengppob.pusatdigi.com/digital/242539",
      identity: null,
      name: "Pulsa",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_214230_0000.png",
    },
    {
      href: null,
      identity: "pulsareg",
      name: "Paket Data",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_214140_0000.png",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288369",
      identity: null,
      name: "SMS & Tlp",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_211350_0000.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/242575",
      identity: null,
      name: "Token Pln",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_211251_0000.png",
    },
    
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/245010",
      identity: null,
      name: "Streaming",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_210729_0000.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/196229",
      identity: null,
      name: "Wifi ID",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_210650_0000.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/244282",
      identity: null,
      name: "Tsel Omni",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_210624_0000.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/196230",
      identity: null,
      name: "E-Toll",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_210535_0000.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/242587",
      identity: null,
      name: "E-Wallet",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231203_205939_0000.png",
    },
  ];

 const gameListDiv = document.getElementById("prabayar");

  // Loop melalui setiap objek dalam array arrGame
  arrPPOB.forEach((game) => {
    // Membuat elemen img baru
    const imgElement = document.createElement("img");
    imgElement.src = game.img;
    imgElement.alt = game.name;

    // Membuat elemen p baru untuk menampilkan nama game
    const nameElement = document.createElement("p");
    nameElement.textContent = game.name;
    nameElement.classList.add("name");

    // Membuat elemen div baru untuk mengelompokkan gambar dan nama
    const gameElement = document.createElement("div");
    gameElement.classList.add("app-list");
    gameElement.appendChild(imgElement);
    gameElement.appendChild(nameElement);

    // Membuat elemen a baru
    const aElement = document.createElement("a");

    // Jika identity tidak null, tambahkan atribut data-bs-toggle, data-bs-target, dan aria-controls
    if (game.identity !== null) {
      aElement.setAttribute("data-bs-toggle", "offcanvas");
      aElement.setAttribute("data-bs-target", `#${game.identity}`);
      aElement.setAttribute("aria-controls", `#${game.identity}`);
    }

    if (game.href !== null) {
      aElement.href = game.href;
    }

    aElement.appendChild(gameElement);

    // Menambahkan elemen aElement ke dalam elemen div gameListDiv
    gameListDiv.appendChild(aElement);
  });
  const arrGame = [
    {
      href: "https://waroengppob.pusatdigi.com/digital/288416",
      identity: null,
      name: "Higgs Domino",
       hot:"Hot",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288432",
      identity: null,
      name: "Mobile Legends",
       hot:"Hot",
      img: "https://millenialstekhnologi.com/tokogaming/logoml.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288435",
      identity: null,
      name: "Free Fire",
      hot:"Hot",
      img: "https://millenialstekhnologi.com/logo/ff1.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288437",
      identity: null,
      name: "Pubg Mobile",
      img: "https://millenialstekhnologi.com/logo/pubg1.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288430",
      identity: null,
      name: "Royal Dream",
           hot:"Hot",
      img: "https://millenialstekhnologi.com/logo/royal1.gif",
    },
    
    
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/242551",
      identity: null,
      name: "Call Of Duty",
      img: "https://millenialstekhnologi.com/logo/cod1.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288439",
      identity: null,
      name: "Garena Undawn",
      img: "https://millenialstekhnologi.com/logo/undawn1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250115",
      identity: null,
      name: "FC Mobile",
      img: "https://millenialstekhnologi.com/logo/fc1.webp",
    },
    
     
    {
    href: "https://waroengppob.pusatdigi.com/digital/288441",
      identity: null,
      name: "Bos Domino",
       hot:"Hot",
      img: "https://millenialstekhnologi.com/logo/bos1.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/250116",
      identity: null,
      name: "Sausageman",
      img: "https://millenialstekhnologi.com/logo/sausageman1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/242681",
      identity: null,
      name: "Genshin Impact",
      img: "https://millenialstekhnologi.com/logo/genshin1.webp",
    },
    {
      href: null,
      identity: "aov",
      name: "ArenaOfValor",
      img: "https://millenialstekhnologi.com/logo/arena1.webp",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/288471",
      identity: null,
      name: "Domino Bearfish",
      hot:"Hot",
    img: "https://millenialstekhnologi.com/logo/bfc4.webp",
   
    },
    /*
    {
      href: "https://waroengppob.bukaolshop.site/digital/242687",
      identity: null,
      name: "Life After",
      img: "https://millenialstekhnologi.com/logo/life1.jpg",
    },*/
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/242647",
      identity: null,
      name: "Ragnarok Mobile",
      img: "https://millenialstekhnologi.com/logo/ragnarok1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/242910",
      identity: null,
      name: "MetalSlug Awakening",
      img: "https://millenialstekhnologi.com/logo/metal1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/243719",
      identity: null,
      name: "Marvel Super War",
      img: "https://millenialstekhnologi.com/logo/marvel1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/242677",
      identity: null,
      name: "Rules Of Survival",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/10/images-2023-10-14t135305.540.jpeg",
    },
    
    /*{
      href: null,
      identity: "onePuchManCanv",
      name: "One Punch Man",
      img: "https://codingasikgame.files.wordpress.com/2023/09/opm.jpg",
    },*/
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/242645",
      identity: null,
      name: "Hago",
      img: "https://codingasikgame.files.wordpress.com/2023/08/unnamed-1.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/253495",
      identity: null,
      name: "Dragon Raja",
      img: "https://codingasikgame.files.wordpress.com/2023/09/unnamed-5.png",
    },
    
    /*{
      href: null,
      identity: "honkaiImpactCanv",
      name: "Honkai Impact",
      img: "https://codingasikgame.files.wordpress.com/2023/09/honkaiimpact.png",
    },*/
    
    {
      href: null,
      identity: "ballPoolCanv",
      name: "8 Ball Pool",
      img: "https://codingasikgame.files.wordpress.com/2023/08/8-ball-pool-2021-08-05.jpg",
    },
    
    /*{
      href: null,
      identity: "valoranCanv",
      name: "Valorant",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/983/597/small/valorant-logo-transparent-free-png.png",
    },*/
    
    /*{
      href: null,
      identity: "pbCanv",
      name: "Point Blank",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-18t0018217056555793704318243.jpg",
    },*/
    
    /*{
      href: null,
      identity: "supersusCanv",
      name: "Supersus",
      img: "https://imgs2.dab3games.com/super-sus-who-is-impostor-game47.png",
    },*/
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/242675",
      identity: null,
      name: "Poker Texas Boyaa",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/10/images-2023-10-14t134152.013.jpeg",
    },
    /*{
      href: null,
      identity: "dnEvolutionCanv",
      name: "Dragon Nest Evolution",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/10/images-2023-10-14t134533.414.jpeg",
    },
    {
      href: null,
      identity: "lolCanv",
      name: "LOL Wild Drift",
      img: "https://esports.id/img/article/873920191021042955.jpg",
    },
    {
      href: null,
      identity: "cocCanv",
      name: "COC",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-12t225501.656.jpg",
    },
    {
      href: null,
      identity: "rokCanv",
      name: "Rise Of Kingdoms",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/unnamed-1.webp",
    },
    {
      href: null,
      identity: "crCanv",
      name: "Clash Royale",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/unnamed28129.webp",
    },
    {
      href: null,
      identity: "footballMasterCanv",
      name: "Football Master 2",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-12t230555.101.jpeg",
    },*/
   
    
  ];



  const gameListDiv2 = document.getElementById("gameList");

  // Loop melalui setiap objek dalam array arrGame
  arrGame.forEach(function(game,index){
    // Membuat elemen img baru
 const imgElement = document.createElement("img");
 const wrapImg = document.createElement('div');
 wrapImg.classList.add('wrapImgHot');
 const textHot = document.createElement('span');
    
 textHot.classList.add('hot-absolute',`style-hot${index}`)
    
   imgElement.src = game.img;
    imgElement.alt = game.name;
   if(!game.hot){
   textHot.innerText = "";
   }else{
   
   textHot.innerText = game.hot; 
   
 }
    // Membuat elemen p baru untuk menampilkan nama game
    const nameElement = document.createElement("p");
    nameElement.textContent = game.name;
    nameElement.classList.add("name");

    // Membuat elemen div baru untuk mengelompokkan gambar dan nama
    const gameElement = document.createElement("div");
 
   gameElement.classList.add("game");

const conWrapProdukGame = document.createElement('div');
  conWrapProdukGame.classList.add('conWrapProdukGame')
  
   
 const wrapProdukGame = document.createElement('div');
 wrapProdukGame.classList.add('wrapProdukGame')
conWrapProdukGame.appendChild(wrapProdukGame)

gameElement.appendChild(conWrapProdukGame);
 wrapImg.appendChild(imgElement);
 wrapImg.appendChild(textHot);
  wrapProdukGame.appendChild(wrapImg);
 gameElement.appendChild(nameElement);

    // Membuat elemen a baru
    const aElement = document.createElement("a");

    // Jika identity tidak null, tambahkan atribut data-bs-toggle, data-bs-target, dan aria-controls
    if (game.identity !== null) {
      aElement.setAttribute("data-bs-toggle", "offcanvas");
      aElement.setAttribute("data-bs-target", `#${game.identity}`);
      aElement.setAttribute("aria-controls", `#${game.identity}`);
    }

    if (game.href !== null) {
      aElement.href = game.href;
    } else {
      aElement.href = "#";
    }

    aElement.appendChild(gameElement);

    // Menambahkan elemen aElement ke dalam elemen div gameListDiv
    gameListDiv2.appendChild(aElement);
  });

  // Function to populate data
  function populateData(arr, id) {
    const container = document.getElementById(id);
    container.innerHTML = ""; // Clear previous content

    arr.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.href = item.href;

      const appList = document.createElement("div");
      appList.classList.add("app-list");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = "";

      const nameParagraph = document.createElement("p");
      nameParagraph.classList.add("name");
      nameParagraph.textContent = item.name;

      appList.appendChild(img);
      appList.appendChild(nameParagraph);
      anchor.appendChild(appList);
      container.appendChild(anchor);
    });
  }

  const arrHiggsDomino = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/254869",
      name: "Chip Ungu",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/249434",
      name: "Chip Kuning",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/263576",
      name: "Chip Toko",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },
    /*{
      href: "https://waroengppob.bukaolshop.site/digital/249523",
      name: "Chip Kuning Super Promo",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },*/
    {
      href: "https://waroengppob.bukaolshop.site/digital/249528",
      name: "Akun Higgs Domino",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },
    /*{
      href: "https://waroengppob.bukaolshop.site/digital/249527",
      name: "Chip Kuning Premium",
      img: "https://millenialstekhnologi.com/tokogaming/hdi.webp",
    },*/
    {
      href: "https://waroengppob.pusatdigi.com/digital/268387",
      name: "Bongkar Chip Langganan",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/11/20231130_003547_0000.png",
    },
    
  ];
  const arrMobileLegends = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/242547",
      name: "Mobile Legend A",
      img: "https://millenialstekhnologi.com/tokogaming/mla.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/254711",
      name: "Mobile Legend B",
      img: "https://millenialstekhnologi.com/tokogaming/mlb.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/254713",
      name: "Mobile Legend C",
      img: "https://millenialstekhnologi.com/tokogaming/logoml.webp",
    },
  ];

  const arrFreeFire = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/242543",
      name: "FF Fast",
      img: "https://millenialstekhnologi.com/logo/ff2.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "FF Murah",
      img: "https://millenialstekhnologi.com/logo/ff3.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "FF Super Murah",
      img: "https://millenialstekhnologi.com/logo/ff4.webp",
    },
  ];

  const arrRoyalDream = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/256034",
      name: "Chip Orange",
      img: "https://millenialstekhnologi.com/logo/royal1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/256035",
      name: "Chip Kuning",
      img: "https://millenialstekhnologi.com/logo/royal2.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Chip Partai",
      img: "https://millenialstekhnologi.com/logo/royal1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/265477",
      name: "Akun Agen",
      img: "https://millenialstekhnologi.com/logo/royal2.webp",
    },
    
       {
      href: "https://waroengppob.pusatdigi.com/digital/267930",
      name: "Bongkar Chip",
      img: "https://millenialstekhnologi.com/logo/royal2.webp",
    },
    
  ];

  const arrGarenaUndawn = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/243721",
      name: "Garena Undawn S1",
      img: "https://millenialstekhnologi.com/logo/undawn2.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250689",
      name: "Garena Undawn S2",
      img: "https://millenialstekhnologi.com/logo/undawn1.webp",
    },
  ];

  const arrPubg = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/242569",
      name: "PUBG Mobile Reguler",
      img: "https://millenialstekhnologi.com/logo/pubg1.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250760",
      name: "PUBG Mobile ID S2",
      img: "https://millenialstekhnologi.com/logo/pubg2.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250761",
      name: "PUBG Mobile Global",
      img: "https://millenialstekhnologi.com/logo/pubg3.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250762",
      name: "PUBG Mobile ID S3",
      img: "https://millenialstekhnologi.com/logo/pubg4.webp",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/250763",
      name: "PUBG:New State Mobile",
      img: "https://millenialstekhnologi.com/logo/pubg1.webp",
    },
  ];

  const arrBall8 = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Special Items",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-19t2211002999690008100052736.jpg",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Coin",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-19t2211002999690008100052736.jpg",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Cash",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/images-2023-12-19t2211002999690008100052736.jpg",
    },
  ];

  const arrActVoucher = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/254967",
      name: "Vcr.Telkomsel",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_012929_00002913045142973053380.png",
    },
    {
      href: "#",
      name: "Vcr.Xl",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013432_00002522676415776158679.png",
    },
    {
      href: "#",
      name: "Vcr.Axis",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013716_00003659915514944928854.png",
    },
    {
      href: "#",
      name: "Vcr.Indosat",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/wp-1702841249725910846242566153883.png",
    },
    {
      href: "#",
      name: "Vcr.Three",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_023450_0000880659542922600271.png",
    },
    {
      href: "#",
      name: "Vcr.SmartFren",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
  ];

  const arrActPerdana = [
    {
      href: "#",
      name: "P.Telkomsel",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_012929_00002913045142973053380.png",
    },
    {
      href: "#",
      name: "P.Xl",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013432_00002522676415776158679.png",
    },
    {
      href: "#",
      name: "P.Axis",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013716_00003659915514944928854.png",
    },
    {
      href: "#",
      name: "P.Indosat",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/wp-1702841249725910846242566153883.png",
    },
    {
      href: "#",
      name: "P.Three",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_023450_0000880659542922600271.png",
    },
    {
      href: "#",
      name: "P.SmartFren",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
  ];
  
  const arrpulsareg = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/233336",
      name: "Data Tsel",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_012929_00002913045142973053380.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/96379",
      name: "Data Xl",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013432_00002522676415776158679.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/96380",
      name: "Data Axis",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013716_00003659915514944928854.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/96381",
      name: "Data Indosat",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/wp-1702841249725910846242566153883.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/96382",
      name: "Data Three",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_023450_0000880659542922600271.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/96383",
      name: "Data SmartFren",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
    
  ];
  
  const arrtelfsms = [
    {
      href: "https://waroengppob.bukaolshop.site/digital/96391",
      name: "SmsTelf Tsel",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_012929_00002913045142973053380.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf Xl",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013432_00002522676415776158679.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf Axis",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_013716_00003659915514944928854.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf Indosat",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/wp-1702841249725910846242566153883.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf Three",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_023450_0000880659542922600271.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf SmartFren",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "SmsTelf ByU",
      img: "https://higgsdominoshopp.files.wordpress.com/2024/02/1000748969-removebg-preview5092508350087604431.png",
    },
  ];
  
  
  const arrpulsacanv = [
    {
      href: "https://waroengppob.pusatdigi.com/digital/242539",
      name: "Pulsa Nasional",
      img: "https://i.ibb.co/GddbCHg/download-compresskaru-com.png",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/96392",
      name: "Pulsa Transfer",
      img: "https://i.ibb.co/GddbCHg/download-compresskaru-com.png",
    },
    {
      href: "https://waroengppob.pusatdigi.com/digital/96393",
      name: "Masa Aktif Kartu",
      img: "https://i.ibb.co/GddbCHg/download-compresskaru-com.png",
    },
   
  ];
  
  
  
  
  const arrBosDomino = [
       {
      href: "https://waroengppob.bukaolshop.site/digital/242639",
      name: "Chip MD",
      img: "https://millenialstekhnologi.com/logo/bos2.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/264960",
      name: "Chip Non MD",
      img: "https://millenialstekhnologi.com/logo/bos1.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Chip Partai Besar",
      img: "https://millenialstekhnologi.com/logo/bos1.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/265461",
      name: "Bongkar Chip",
      img: "https://millenialstekhnologi.com/logo/bos2.webp",
    },
      ];
  
  
  const arrbearfish = [
       {
      href: "https://waroengppob.bukaolshop.site/digital/245117",
      name: "Koin MD",
      img: "https://millenialstekhnologi.com/logo/bfc2.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/265645",
      name: "Koin kuning",
      img: "https://millenialstekhnologi.com/logo/bfc3.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/265315",
      name: "Koin Kuning Partai",
      img: "https://millenialstekhnologi.com/logo/bfc4.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Koin VP",
      img: "https://millenialstekhnologi.com/logo/bfc1.webp",
    },
    
    {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Berlian",
      img: "https://millenialstekhnologi.com/logo/bfc3.webp",
    },
    
     {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "Akun Bearfish VIP",
      img: "https://millenialstekhnologi.com/logo/bfc4.webp",
    },
    
     {
      href: "https://waroengppob.bukaolshop.site/digital/265849",
      name: "Bongkar Chip",
      img: "https://millenialstekhnologi.com/logo/bfc1.webp",
    },
      ];

  const arrfootballMasterCanv = [
       {
      href: "#",
      name: "Football Master 1",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
    

    
    {
      href: "#",
      name: "Football Master 2",
      img: "https://higgsdominoshopp.files.wordpress.com/2023/12/20231218_014257_00002250780546706255887.png",
    },
    ];
    
    const arraov = [
       {
      href: "https://waroengppob.bukaolshop.site/digital/242640",
      name: "AOV S1",
      img: "https://millenialstekhnologi.com/logo/arena2.webp",
    },
    
      {
      href: "https://waroengppob.bukaolshop.site/digital/210354",
      name: "AOV S2",
      img: "https://millenialstekhnologi.com/logo/arena3.webp",
    },
    
      ];
  const arrcrCanv = [];

  // You can choose which array to display, for example:
  populateData(arrHiggsDomino, "appListContainer"); // or populateData(arrMobileLegends);
  populateData(arrMobileLegends, "mobileLegend"); // or populateData(arrMobileLegends);
  populateData(arrFreeFire, "freeFireCanv"); // or populateData(arrMobileLegends);
  populateData(arrRoyalDream, "royalcanv2"); // or populateData(arrMobileLegends);
  populateData(arrGarenaUndawn, "undawncanv2"); // or populateData(arrMobileLegends);
  populateData(arrPubg, "pubgcanv2"); // or populateData(arrMobileLegends);
  populateData(arrBall8, "ball82"); // or populateData(arrMobileLegends);
  populateData(arrActVoucher, "CetakVcrCanv2"); // or populateData(arrMobileLegends);
  populateData(arrActPerdana, "actperdanacanv2"); // or populateData(arrMobileLegends);
  populateData(arrfootballMasterCanv, "footballMasterCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "crCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "rokCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "cocCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "lolCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "supersusCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "pbCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "valoranCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "honkaiImpactCanv2"); // or populateData(arrMobileLegends);
  populateData(arrcrCanv, "onePuchManCanv2"); // or populateData(arrMobileLegends);
   populateData(arrBosDomino, "bosdominocanv2"); // or populateData(arrMobileLegends);
   populateData(arrbearfish, "bearfish2"); // or populateData(arrMobileLegends);
   
  populateData(arraov, "aov2"); // or populateData(arrMobileLegends);
    populateData(arrpulsareg, "pulsareg2"); // or populateData(arrMobileLegends);
    populateData(arrtelfsms, "telfsms2"); // or populateData(arrMobileLegends);
    populateData(arrpulsacanv, "pulsacanv2"); // or populateData(arrMobileLegends);
   
