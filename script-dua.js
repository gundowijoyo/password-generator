
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      var header = document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "#002140";
        header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.5)";
      } else {
        header.style.backgroundColor = "#002140";
        header.style.boxShadow = "none";
      }
    }
    cekMember()
    function cekMember() {
      var hide = "Dummy"
      var user = "{{nama_membership}}"
      if (user == hide) {
        $(".hide-menu").addClass("d-none")
      }
    }
    
    showProductAll.addEventListener("click",()=>{
      window.location.href = "https://waroengppob.pusatdigi.com/digital/210354"
    })
    
    var servUrl = "https://waroengppob.bukaolshop.site"
    function Refresh() {
      window.location.href = servUrl + "/refresh_saldo"
    }
    function rubah(angka) {
      var reverse = angka.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return "Rp" + ribuan;
    }
    document.getElementById("my_saldo").innerText = rubah(document.getElementById("my_saldo").textContent);
    
        function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
    
        function codingasikhidden() {
      let hiddenEmails = ["testing.email@gmail.com", "faulinacurup705@gmail.comm",
        "roniherlian1@gmail.comm",
        "arlen0g@gmail.com",

        "mandagiky@gmail.com", "ardhyanugemy2@gmail.coom"]; // Isi dengan alamat email yang ingin di-hide

      let emailBo = "{{email_user}}";
      let konten = document.getElementById("hideone");

      if (hiddenEmails.includes(emailBo)) {
        konten.style = "display:none";
      } else {
        konten.style = "display:block";
      }
    }

    codingasikhidden();
 
     function showPopup() {
      const helpText = document.getElementById("helpText");
      const helpText2 = document.getElementById("helpText2");
      const helpPopup = document.getElementById("helpPopup");

      if (event.target === helpText || event.target === helpText2) {
        helpPopup.style.display = "block";
      }
    }

    function closePopup() {
      document.getElementById("helpPopup").style.display = "none";
    }  
    
        var _0x7d04 = ["\x33\x30\x70\x78", "\x34\x30\x70\x78", "\x31\x35\x70\x78", "\x73\x6C\x69\x63\x6B", "\x2E\x63\x65\x6E\x74\x65\x72", "", "\x6A\x6F\x69\x6E", "\x72\x65\x76\x65\x72\x73\x65", "\x73\x70\x6C\x69\x74", "\x6D\x61\x74\x63\x68", "\x2E", "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74", "\x73\x61\x6C\x64\x6F\x5F\x75\x73\x65\x72", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74"]; $(_0x7d04[4])[_0x7d04[3]]({ centerMode: true, centerPadding: _0x7d04[0], autoplay: true, autoplaySpeed: 3000, speed: 700, slidesToShow: 1, responsive: [{ breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: _0x7d04[1], slidesToShow: 3 } }, { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: _0x7d04[2] } }] }); function rubah(_0x6263x2) { var _0x6263x3 = _0x6263x2.toString()[_0x7d04[8]](_0x7d04[5])[_0x7d04[7]]()[_0x7d04[6]](_0x7d04[5]), _0x6263x4 = _0x6263x3[_0x7d04[9]](/\d{1,3}/g); _0x6263x4 = _0x6263x4[_0x7d04[6]](_0x7d04[10])[_0x7d04[8]](_0x7d04[5])[_0x7d04[7]]()[_0x7d04[6]](_0x7d04[5]); return _0x6263x4 } document[_0x7d04[13]](_0x7d04[12])[_0x7d04[11]] = rubah(document[_0x7d04[13]](_0x7d04[12])[_0x7d04[14]])
