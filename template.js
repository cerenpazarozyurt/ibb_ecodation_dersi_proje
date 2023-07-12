// Dark Mode
let darkModu=()=>{
    //alert("Dark Modu");
    document.body.classList.toggle("dark_mode");
}

//input search
$(document).ready(function(){   //sayfa ne zaman hazırsa o zaman çalıştırıyor.
const searchApi=["Adana", "Balikesir","Çorum","Denizli","Diyarbakir","Edirne","Malatya","Van"];
$("#tags").autocomplete({
    source:searchApi
})
});

// footer
let newDate=()=>{
    // JS DOM
document.getElementById("date_id").innerHTML=new Date().getFullYear()

// Jquery DOM
// $("#date_id").html(new Date().getFullYear) şeklinde olur.
}
newDate()