var çıkma=10;
class grafik {
   yuvarla(sayı){
        //105
        //55
        //8
        //1050
        var leng=sayı.toString().length;
        var sy="";
        for(i=1;i<leng;i++){
        sy+="0";
        }
        var onluk="1" + sy ;
        var ilkharf=parseInt(sayı.toString()[0]);
        var yuvar;
        if(ilkharf>4){
        yuvar=""+ (ilkharf+1) +"" + sy;
        }
        else{
        yuvar="" + ilkharf + sy;
        }
        var kalan=parseInt(sayı) % parseInt(onluk);
        var sonuç="";
        if(kalan < parseInt(onluk) /2){
        sonuç="" + ilkharf + (parseInt(onluk) /2);
        }
        else{
            sonuç=""+ (ilkharf+1) + sy;
        }
        
        return parseInt(sonuç);
        }
    constructor(div, dat, dat2) {
        let yükselme=true;
        this.data = dat;
        var cha = document.getElementById(div);
        var  fffas = document.getElementsByClassName("chartcubuk");

        cha.innerHTML="";
        let vid = cha.offsetWidth - 50;
        let heigt = cha.offsetHeight - 10;
        cha.style.paddingLeft = "10px";
        cha.style.paddingBottom = "22px";

        let enbuyuk = 0;
        var g = 0;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] > enbuyuk) {
                enbuyuk = dat[g];
            }

        }
        let enkucuk = enbuyuk;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] < enkucuk) {
                enkucuk = dat[g];
            }

        }
         enbuyuk=this.yuvarla(enbuyuk);
         let heightindex = heigt / enbuyuk;
         let index = (vid - (dat.length * 7)) / dat.length;
        var i = 0;
        var left = 0;
        var top = -5;
        for (i = 1; i < 6; i++) {

            var ü = (enbuyuk / i);
            var deg = document.createElement("p");
            if (i == 5) {
                deg.innerHTML = "0";
            }
            else {
                if(i!=1){
                    var p = ü.toString();
                    deg.innerHTML = parseInt(enbuyuk - this.yuvarla(Math.ceil(ü))  ).toString();
                }
else{
    var p = ü.toString();
    deg.innerHTML = parseInt(Math.ceil(ü) ).toString();
}
            }

            deg.style.position = "absolute";
            deg.style.left = "10px";
            if (parseInt(deg.innerHTML)==0){
                if(çıkma==0){
                    deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 30) + "px";
                }
            else{
                deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 20) + "px";
            }
            }
            else{
            deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 10) + "px";
            }
            if(cha.innerHTML.indexOf( ">" + deg.innerHTML + "<") > -1){
            }
            else{
                cha.appendChild(deg);
            }


        }

        for (i = 0; i < dat.length; i++) {
            let değer = 0;

            değer = dat[i];

            let a = document.createElement("div");
            a.style.height ="0px";
            let rgbindex = enbuyuk / 40;
            a.style.width = index + "px";
            a.style.marginRight = "5px";
            a.style.cursor = "pointer";
            a.className = "chartcubuk";
            //<div class="gösterge">15</div>
            a.style.top = ((heigt - (değer * heightindex))+ (değer * heightindex) + çıkma ) + "px";
       
            let çizgi = document.createElement("div");
   let gösterge = document.createElement("div");
                //  a.style.height = (değer * heightindex) + "px";
        var inter= setInterval(() => {
          yükselme=true;
            if(a.offsetHeight < (değer * heightindex)){
              
            //     a.style.height=(değer * heightindex) + "px";
            a.style.height=(a.offsetHeight+1) +"px";
            a.style.top=(a.offsetTop-3) +"px";
              //   a.style.top = (((heigt - (değer * heightindex)) + çıkma )) + "px";
              çizgi.style.top = (a.offsetTop-3) + "px";
            }
             else{
             clearInterval(inter);
                gösterge.style.top=(a.offsetTop -50) +"px";
                yükselme=false;
            }
          

         }, 1);


       
         gösterge.className = "gösterge";
         gösterge.innerHTML = "" + dat2[i] + "-" + değer;
         var h = "" + dat2[i] + "-" + değer;
         gösterge.style.width = (parseInt(h.length * 6.5) + 13) + "px";
              //   gösterge.style.top=(a.offsetTop - 20) + "px"
         gösterge.style.visibility = "hidden";
         gösterge.style.zIndex = "1005";
         gösterge.style.left = (((50 + left) - gösterge.offsetWidth) - (index + 5) -((parseInt(h.length * 6.5) + 13) /2)) + "px";
           let fl = top + cha.offsetTop;
            a.style.position = "absolute";
     
            çizgi.style.width = (vid)  + "px";
            çizgi.style.height = "1px";
            çizgi.style.position = "absolute";
            çizgi.style.left = "50px";
            çizgi.style.backgroundColor = "gray";

            a.style.zIndex="1000";
//çizgi.style.visibility="hidden";
a.onmouseover = function () {
    if(yükselme==false){
    gösterge.style.visibility = "visible";
    a.style.border = "3px solid black";
    çizgi.style.height = "2px";
    çizgi.style.backgroundColor = "black";
    çizgi.style.zIndex="99999"
    }
    console.log(yükselme);
}
a.onmouseleave = function () {
    if(yükselme==false){
    gösterge.style.visibility = "hidden";
    a.style.border = "1px solid white";
    çizgi.style.height = "1px";
    çizgi.style.backgroundColor = "gray";
    çizgi.style.zIndex="0"
    }
}

            a.style.left = (50 + left) + "px";
            cha.appendChild(a);
            cha.appendChild(çizgi);
            cha.appendChild(gösterge);
            left += index + 7;
        
    }
    }

}

class ortalıgrafik {
    yuvarla(sayı){
         //105
         //55
         //8
         //1050
         var leng=sayı.toString().length;
         var sy="";
         for(i=1;i<leng;i++){
         sy+="0";
         }
         var onluk="1" + sy ;
         var ilkharf=parseInt(sayı.toString()[0]);
         var yuvar;
         if(ilkharf>4){
         yuvar=""+ (ilkharf+1) +"" + sy;
         }
         else{
         yuvar="" + ilkharf + sy;
         }
         var kalan=parseInt(sayı) % parseInt(onluk);
         var sonuç="";
         if(kalan < parseInt(onluk) /2){
         sonuç="" + ilkharf + (parseInt(onluk) /2);
         }
         else{
             sonuç=""+ (ilkharf+1) + sy;
         }
         
         return parseInt(sonuç);
         }
     constructor(div, dat, dat2) {
         let yükselme=true;
         this.data = dat;
         var cha = document.getElementById(div);
         var  fffas = document.getElementsByClassName("chartcubuk");
 
         cha.innerHTML="";
         let vid = cha.offsetWidth - 50;
         let heigt = cha.offsetHeight - 10;
         cha.style.paddingLeft = "10px";
         cha.style.paddingBottom = "22px";
 
         let enbuyuk = 0;
         var g = 0;
         for (g = 0; g < dat.length; g++) {
             if (dat[g] > enbuyuk) {
                 enbuyuk = dat[g];
             }
 
         }
         let enkucuk = enbuyuk;
         for (g = 0; g < dat.length; g++) {
             if (dat[g] < enkucuk) {
                 enkucuk = dat[g];
             }
 
         }
          enbuyuk=this.yuvarla(enbuyuk);
          let heightindex = heigt / enbuyuk;
          let index = (vid - (dat.length * 5)) / dat.length;
         var i = 0;
         var left = 0;
         var top = -5;
         for (i = 1; i < 6; i++) {
 
             var ü = (enbuyuk / i);
             var deg = document.createElement("p");
             if (i == 5) {
                 deg.innerHTML = "0";
             }
             else {
                 if(i!=1){
                     var p = ü.toString();
                     deg.innerHTML = parseInt(enbuyuk - this.yuvarla(Math.ceil(ü))  ).toString();
                 }
 else{
     var p = ü.toString();
     deg.innerHTML = parseInt(Math.ceil(ü) ).toString();
 }
             }
 
             deg.style.position = "absolute";
             deg.style.left = "10px";
             if (parseInt(deg.innerHTML)==0){
                 if(çıkma==0){
                     deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 30) + "px";
                 }
             else{
                 deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 20) + "px";
             }
             }
             else{
             deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 10) + "px";
             }
             if(cha.innerHTML.indexOf( ">" + deg.innerHTML + "<") > -1){
             }
             else{
                 cha.appendChild(deg);
             }
 
 
         }
 
         for (i = 0; i < dat.length; i++) {
             let değer = 0;
 
             değer = dat[i];
 
             let a = document.createElement("div");
             a.style.height ="3px";
             let rgbindex = enbuyuk / 40;
             a.style.width = index + "px";
       //      a.style.marginRight = "5px";
             a.style.cursor = "pointer";
             a.className = "chartcubuk";
             a.style.borderRadius="25px";
             //<div class="gösterge">15</div>
          //   a.style.top = (parseInt(heigt/2)+parseInt(heigt/12)) + "px";
          a.style.top = (((heigt - (değer * heightindex)) + çıkma )) + "px";
             let çizgi = document.createElement("div");
    let gösterge = document.createElement("div");
  // a.style.height=index +"px";
                 //  a.style.height = (değer * heightindex) + "px";
        yükselme=false;
 
 
        gösterge.style.top = (((heigt - (değer * heightindex)) -40 )) + "px";
          gösterge.className = "gösterge";
          gösterge.innerHTML = "" + dat2[i] + "-" + değer;
          var h = "" + dat2[i] + "-" + değer;
          gösterge.style.width = (parseInt(h.length * 6.5) + 13) + "px";
               //   gösterge.style.top=(a.offsetTop - 20) + "px"
          gösterge.style.visibility = "hidden";
          gösterge.style.zIndex = "1005";
          gösterge.style.left = (((50 + left) - gösterge.offsetWidth) - (index ) -((parseInt(h.length * 6.5) + 13) /2)+10) + "px";
            let fl = top + cha.offsetTop;
             a.style.position = "absolute";
      çizgi.style.top=(((heigt - (değer * heightindex)) + çıkma )+3) + "px";
             çizgi.style.width = (vid)  + "px";
             çizgi.style.height = "1px";
             çizgi.style.position = "absolute";
             çizgi.style.left = "50px";
             çizgi.style.backgroundColor = "gray";
 
             a.style.zIndex="1000";
            let ikinciçizgi=document.createElement("div");
             ikinciçizgi.style.width = "1px";
             ikinciçizgi.style.height = heigt +  "px";
             ikinciçizgi.style.position = "absolute";
             ikinciçizgi.style.top = "13px";
             ikinciçizgi.style.backgroundColor = "gray";
             ikinciçizgi.style.left=(((50 + left) - gösterge.offsetWidth) + parseInt(index /2) +1 ) + "px";
          a.style.borderRadius="0px";
 //çizgi.style.visibility="hidden";
 a.onmouseover = function () {
     if(yükselme==false){
     gösterge.style.visibility = "visible";
     a.style.border = "3px solid black";
     çizgi.style.height = "2px";
     çizgi.style.backgroundColor = "black";
     çizgi.style.zIndex="99999";
     ikinciçizgi.style.width = "2px";
     ikinciçizgi.style.backgroundColor="black";
     ikinciçizgi.style.zIndex="99999";
     }
     console.log(yükselme);
 }
 a.onmouseleave = function () {
     if(yükselme==false){
     gösterge.style.visibility = "hidden";
     a.style.border = "1px solid white";
     çizgi.style.height = "1px";
     çizgi.style.backgroundColor = "gray";
     çizgi.style.zIndex="0";
    ikinciçizgi.style.width = "1px";
    ikinciçizgi.style.backgroundColor = "gray";
    ikinciçizgi.style.zIndex="0";
     }
 }
 
             a.style.left = (50 + left) + "px";
             cha.appendChild(a);

             cha.appendChild(çizgi);
             cha.appendChild(ikinciçizgi);
             cha.appendChild(gösterge);
             left += index ;
         
     }
     let leftt = 0;
     //(değer * heightindex)
     for(i=0;i<dat.length-1;i++){
        let değer=dat[i];
        let a2=document.createElement("div");
        a2.style.width="3px";
        a2.style.position="absolute";
        a2.style.left=((50 + leftt) + index+2 )  + "px";
        a2.className = "chartcubuk";
        a2.style.background="linear-gradient(180deg, white 20%, white )";
        a2.style.border="0px solid white";

        a2.style.borderRadius="0px";
        //(((heigt - (değer * heightindex)) + çıkma )) + "px";
        a2.style.top=(((heigt - (değer * heightindex)) + çıkma )) + "px";
        
        if(dat[i+1]>değer){
            a2.style.height=(( dat[i+1] * heightindex) -(değer * heightindex) ) + "px";
            a2.style.top=((((heigt - (( dat[i+1] * heightindex))) + çıkma )) ) + "px";;
        }
        else{
            a2.style.height=( (değer * heightindex) - (dat[i+1] * heightindex))+ "px";
            a2.style.top=((((heigt - (değer * heightindex)) + çıkma )) ) + "px";
    
        }

      
        cha.appendChild(a2);
        leftt+=parseInt(index)  ;
     }
     }
 
 }
class çizgigrafik {
    randomint(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    yuvarla(sayı){
         //105
         //55
         //8
         //1050
         var leng=sayı.toString().length;
         var sy="";
         for(i=1;i<leng;i++){
         sy+="0";
         }
         var onluk="1" + sy ;
         var ilkharf=parseInt(sayı.toString()[0]);
         var yuvar;
         if(ilkharf>4){
         yuvar=""+ (ilkharf+1) +"" + sy;
         }
         else{
         yuvar="" + ilkharf + sy;
         }
         var kalan=parseInt(sayı) % parseInt(onluk);
         var sonuç="";
         if(kalan < parseInt(onluk) /2){
         sonuç="" + ilkharf + (parseInt(onluk) /2);
         }
         else{
             sonuç=""+ (ilkharf+1) + sy;
         }
         
         return parseInt(sonuç);
         }
         
     constructor(div, dat, dat2) {

        let enbuyuk = 0;
        var g = 0;
        let toplam=0;
        var eksi=0;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] > enbuyuk) {
                enbuyuk = dat[g];
            }
           toplam+=parseInt(dat[g]);
        }
        let enkucuk = enbuyuk;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] < enkucuk) {
                enkucuk = dat[g];
            }

        }
        eksi=dat.length*5;
         let yükselme=true;
         this.data = dat;
         let cha = document.getElementById(div);
         var  fffas = document.getElementsByClassName("chartcubuk");
 
         cha.innerHTML="";
         let vid = cha.offsetWidth - eksi;
         let heigt = cha.offsetHeight- 10;
         cha.style.paddingLeft = "10px";
         cha.style.paddingBottom = "22px";

         var index=(vid/toplam);
let left=0;
var colorindex=255/dat.length;
        for(let i=0;i<dat.length;i++){
             console.log(i);
             let değer=dat[i];
            let vidth=değer*index;

             let a = document.createElement("div");
             a.style.width=vidth + "px";
             a.style.height="10px";
             a.style.left=left +"px";
             a.style.position="absolute";
             a.style.top=((cha.offsetHeight/2) -5) + "px";
             a.style.cursor="pointer";
             left+=vidth + 5;
             a.style.marginLeft="5px";
 a.style.backgroundColor="rgb(" + (this.randomint(10,150)) + "," + (this.randomint(10,150)) +  "," + (this.randomint(10,150)) + ")";
 a.style.borderRadius="20px";
 a.style.border="0px solid white";

 let gösterge = document.createElement("div");

 gösterge.style.top = (10) + "px";
   gösterge.className = "gösterge";
   gösterge.innerHTML = "" + dat2[i] + "-" + değer;

   var h = "" + dat2[i] + "-" + değer;
gösterge.style.width = (parseInt(h.length * 6.5) + 13) + "px";
        //   gösterge.style.top=(a.offsetTop - 20) + "px"
 //sterge.style.zIndex = "1005";
   gösterge.style.left = ((( left-25) - gösterge.offsetWidth) - (index ) -((parseInt(h.length * 6.5) + 13) /2)+10) + "px";
gösterge.style.visibility="hidden";
a.onmousemove = function (){
    a.style.border="2px solid black";
    gösterge.style.visibility="visible";
}
a.onmouseleave  = function (){
    a.style.border="0px solid white";
    gösterge.style.visibility="hidden";
}
cha.appendChild(a);
cha.appendChild(gösterge);
        }
        
     }
  
 }



 class üstüstegrafik {
    randomint(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    yuvarla(sayı){
         //105
         //55
         //8
         //1050
         var leng=sayı.toString().length;
         var sy="";
         for(i=1;i<leng;i++){
         sy+="0";
         }
         var onluk="1" + sy ;
         var ilkharf=parseInt(sayı.toString()[0]);
         var yuvar;
         if(ilkharf>4){
         yuvar=""+ (ilkharf+1) +"" + sy;
         }
         else{
         yuvar="" + ilkharf + sy;
         }
         var kalan=parseInt(sayı) % parseInt(onluk);
         var sonuç="";
         if(kalan < parseInt(onluk) /2){
         sonuç="" + ilkharf + (parseInt(onluk) /2);
         }
         else{
             sonuç=""+ (ilkharf+1) + sy;
         }
         
         return parseInt(sonuç);
         }
         
     constructor(div, dat, dat2) {

        let enbuyuk = 0;
        var g = 0;
        let toplam=0;
        var eksi=0;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] > enbuyuk) {
                enbuyuk = dat[g];
            }
           toplam+=parseInt(dat[g]);
        }
        let enkucuk = enbuyuk;
        for (g = 0; g < dat.length; g++) {
            if (dat[g] < enkucuk) {
                enkucuk = dat[g];
            }

        }
        let aff=0;
        for( aff=0;aff<(dat.length *25);aff++){
        for( i=0;i<dat.length-1;i++){
                let ism = dat2[i];
                let değer=dat[i];
                let sisim=dat2[i+1];
                let sdeğer=dat[i+1];
                if (parseInt(değer) < parseInt(sdeğer)){
                    dat[i+1]=değer;
                    dat[i]=sdeğer;
                    dat2[i+1]=ism;
                    dat2[i]=sisim;
                }
        }
    }
        eksi=dat.length*4;
         let yükselme=true;
         this.data = dat;
         let cha = document.getElementById(div);

         var  fffas = document.getElementsByClassName("chartcubuk");

         cha.innerHTML="";
         let vid = cha.offsetWidth - 20;
         let heigt = cha.offsetHeight- eksi;
         cha.style.paddingLeft = "10px";
         cha.style.paddingBottom = "22px";
         var index=0;

        index=(vid/dat.length);
     
        //(vid/enbuyuk)
let left=30;
var colorindex=255/dat.length;
var top=15;
        for(let i=0;i<dat.length;i++){
             let değer=dat[i];
            let vidth=değer*index;
             let a = document.createElement("div");
         a.style.width= ((değer *(vid / enbuyuk))) + "px";
        let yazı = document.createElement("p");
         console.log("adsad=" + (değer / (enbuyuk/100)));
         yazı.style.position="absolute";
         yazı.style.textShadow="1px 1px 5px  black";
         yazı.style.text
         yazı.style.color="white";
      //   yazı.style.top= (top )+ "px";
    //     yazı.style.left=(((değer / (enbuyuk/100))) + 15 ) + "px";
         yazı.innerHTML="%" + ((değer /(toplam/100))).toFixed(2)  + "  " + dat2[i];
console.log("index= "  + index);
a.style.cursor="pointer";
yazı.style.width=(yazı.innerHTML.length*7)+"px";

if((yazı.innerHTML.length*7) +((değer *(vid / enbuyuk))+5) > vid+20){
    yazı.style.left=(((değer *(vid / enbuyuk))) -((yazı.innerHTML.length*7) +5)) + "px";
}
else{
    yazı.style.left=((değer *(vid / enbuyuk))+5) + "px";
}
a.style.backgroundColor="black";
a.style.height= (heigt / dat.length) + "px";
a.style.position="absolute";
 let gösterge = document.createElement("div");
 gösterge.style.textShadow="1px 1px black";
 gösterge.style.color="white";
a.style.top=top + "px";
 gösterge.style.top = (top - 45)+ "px";
   gösterge.className = "gösterge";
   let renk="rgb(" + (this.randomint(100,255)) + "," + (this.randomint(100,255)) +  "," + (this.randomint(150,255)) + ")";
   gösterge.innerHTML = "" + dat2[i] + '<span style="padding:3px;background-color:' + renk +'">' + değer + "</span>";
   gösterge.style.backgroundColor=renk;
   a.style.backgroundColor=renk;
 gösterge.style.zIndex="999";
 a.style.borderLeft="1px solid white";


   var h = "" + dat2[i] + "-" + değer;
gösterge.style.width = (parseInt(h.length * 6.5) + 13) + "px";
        //   gösterge.style.top=(a.offsetTop - 20) + "px"
 //sterge.style.zIndex = "1005";
   gösterge.style.left = ((( left-25) - gösterge.offsetWidth) - (index ) -((parseInt(h.length * 6.5) + 13) /2)+10) + "px";
gösterge.style.visibility="hidden";
a.onmousemove = function (){
    a.style.border="1px solid black";
    a.style.borderLeft="2px solid white";
    gösterge.style.visibility="visible";
    a.style.transform="scale(1.2)";
//    yazı.style.left= ((((değer / (enbuyuk/100))) + 10 ) + (((değer / (enbuyuk/100)))*1.2)- (((değer / (enbuyuk/100))) )) + "px";
}
a.onmouseleave  = function (){
    a.style.border="0px solid white";
    gösterge.style.visibility="hidden";
    a.style.borderLeft="1px solid white";
  //  yazı.style.left=(((değer / (enbuyuk/100))) + 15 ) + "px";
     
    a.style.transform="scale(1)";
}
cha.appendChild(a);
a.appendChild(yazı);
cha.appendChild(gösterge);
top+=(heigt / dat.length) + 4;
        }
        
     }
  
 }
 class ikiligrafik {
    yuvarla(sayı){
         //105
         //55
         //8
         //1050
         var leng=sayı.toString().length;
         var sy="";
         for(i=1;i<leng;i++){
         sy+="0";
         }
         var onluk="1" + sy ;
         var ilkharf=parseInt(sayı.toString()[0]);
         var yuvar;
         if(ilkharf>4){
         yuvar=""+ (ilkharf+1) +"" + sy;
         }
         else{
         yuvar="" + ilkharf + sy;
         }
         var kalan=parseInt(sayı) % parseInt(onluk);
         var sonuç="";
         if(kalan < parseInt(onluk) /2){
         sonuç="" + ilkharf + (parseInt(onluk) /2);
         }
         else{
             sonuç=""+ (ilkharf+1) + sy;
         }
         
         return parseInt(sonuç);
         }
     constructor(div, dat, dat2,dat1_2,datisim,dat2isim) {
         let yükselme=true;
         this.data = dat;
         var cha = document.getElementById(div);
         var  fffas = document.getElementsByClassName("chartcubuk");
         cha.innerHTML="";
         let vid = cha.offsetWidth - 80;
         let heigt = cha.offsetHeight - 10;
         cha.style.paddingLeft = "10px";
         cha.style.paddingBottom = "22px";
 var kare=document.createElement("div");
 kare.style.width="20px";
 kare.style.backgroundColor="rgba(236, 155, 114, 0.985)";
 kare.style.height="20px";
 kare.style.position="absolute";
 kare.style.left=(cha.offsetWidth-25) + "px";
 kare.style.top="10px";
 var kare2=document.createElement("div");
 kare2.style.width="20px";
 kare2.style.backgroundColor="rgb(139, 220,193)";
 kare2.style.height="20px";
 kare2.style.position="absolute";
 kare2.style.left=(cha.offsetWidth-25) + "px";
 kare2.style.top="35px";
 kare.style.border="1px solid white";
 kare2.style.border="1px solid white";
let gösterge2=document.createElement("div");
gösterge2.style.position="absolute";
gösterge2.style.visibility="hidden";
gösterge2.style.color="white";
gösterge2.style.border="1px solid red";
gösterge2.style.boxShadow="0px 0px 10px 0px red";
gösterge2.style.padding="5px";
kare.style.cursor="pointer";
kare2.style.cursor="pointer";
kare.onmouseover= function (){
    gösterge2.style.visibility="visible";
    gösterge2.style.left=(cha.offsetWidth )+ "px";
    gösterge2.style.border="1px solid white";
    gösterge2.style.backgroundColor="rgba(236, 155, 114, 0.985)";
gösterge2.style.boxShadow="0px 0px 10px 0px black";
    gösterge2.style.top=(10 )+ "px";
    gösterge2.innerHTML=datisim;
}
kare.onmouseleave = function(){
    gösterge2.style.visibility="hidden";
}
kare2.onmouseover= function (){
    gösterge2.style.visibility="visible";
    gösterge2.style.left=(cha.offsetWidth )+ "px";
    gösterge2.style.border="1px solid white";
    gösterge2.style.backgroundColor="rgb(139, 220,193)";
gösterge2.style.boxShadow="0px 0px 10px 0px black";
    gösterge2.style.top=(35 )+ "px";
    gösterge2.innerHTML=dat2isim;
}
kare2.onmouseleave = function(){
    gösterge2.style.visibility="hidden";
}
 //rgb(139, 220,193)
         let enbuyuk = 0;
         var g = 0;
         for (g = 0; g < dat.length; g++) {
             if (dat[g] > enbuyuk) {
                 enbuyuk = dat[g];
             }
             if (dat1_2[g] > enbuyuk) {
                enbuyuk = dat1_2[g];
            }
         }
         let enkucuk = enbuyuk;
         for (g = 0; g < dat.length; g++) {
             if (dat[g] < enkucuk) {
                 enkucuk = dat[g];
             }
             if (dat1_2[g] < enkucuk) {
                enkucuk = dat1_2[g];
            }
         }
          enbuyuk=this.yuvarla(enbuyuk);
          let heightindex = heigt / enbuyuk;
          let index = (vid - ((dat.length ) * 7)) / (dat.length);
         var i = 0;
         var left = 0;
         var top = -5;
         for (i = 1; i < 6; i++) {
 
             var ü = (enbuyuk / i);
             var deg = document.createElement("p");
             if (i == 5) {
                 deg.innerHTML = "0";
             }
             else {
                 if(i!=1){
                     var p = ü.toString();
                     deg.innerHTML = parseInt(enbuyuk - this.yuvarla(Math.ceil(ü))  ).toString();
                  
                 }

 else{
     var p = ü.toString();
     deg.innerHTML = parseInt(Math.ceil(ü) ).toString();
 }
             }
 
             deg.style.position = "absolute";
             deg.style.left = "10px";
             if (parseInt(deg.innerHTML)==0){
                 if(çıkma==0){
                     deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 30) + "px";
                 }
             else{
                 deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 20) + "px";
             }
             }
             else{
             deg.style.top = (((heigt - (parseInt(deg.innerHTML)) * heightindex)) - 10) + "px";
             }
             if(cha.innerHTML.indexOf( ">" + deg.innerHTML + "<") > -1){
             }
             else{
                 cha.appendChild(deg);
             }
 
 
         }
 
         for (i = 0; i < dat.length; i++) {
             let değer = 0;
             let değer2 = 0;
             değer = dat[i];
             değer2 = dat1_2[i];
             let a = document.createElement("div");
             let ikincia = document.createElement("div");
             
             ikincia.style.height ="0px";
             a.style.height ="0px";
             let rgbindex = enbuyuk / 40;
             a.style.width = index + "px";
             ikincia.style.width = index + "px";
             ikincia.style.marginRight = "5px";
             ikincia.style.cursor="pointer";
             ikincia.style.backgroundColor="rgb(139, 220,193)";
             a.style.cursor = "pointer";
             ikincia.style.position="absolute";
  
             ikincia.className="chartcubuk2";
             a.className = "chartcubuk2";
             //<div class="gösterge">15</div>
             a.style.top = ((heigt - (değer * heightindex))+ (değer * heightindex) + çıkma ) + "px";
             ikincia.style.top = ((heigt - (değer * heightindex))+ (değer * heightindex) + çıkma ) + "px";

             let çizgi = document.createElement("div");
    let gösterge = document.createElement("div");
                  a.style.height = (değer * heightindex) + "px";
                   a.style.top = (((heigt - (değer * heightindex)) + çıkma )) + "px";
                   ikincia.style.height = (değer2 * heightindex) + "px";
                   ikincia.style.top = (((heigt - (değer2 * heightindex)) + çıkma )) + "px";
          gösterge.className = "gösterge";

          var h = "" + dat2[i] + "-" + değer;
          gösterge.style.width = (parseInt(h.length * 6.5) + 13) + "px";
               //   gösterge.style.top=(a.offsetTop - 20) + "px"
          gösterge.style.visibility = "hidden";
          gösterge.style.zIndex = "1005";
          gösterge.style.left = (75 + left) + "px";
          if((75 + left) > cha.offsetWidth -80){
            gösterge.style.left = ( left-75) + "px";
       
          }
          else{
            gösterge.style.left = (75 + left) + "px";
          }
            let fl = top + cha.offsetTop;
             a.style.position = "absolute";
      
             çizgi.style.width = (vid)  + "px";
             çizgi.style.height = "1px";
             çizgi.style.position = "absolute";
             çizgi.style.left = "50px";
             çizgi.style.backgroundColor = "gray";
 yükselme=false;
             a.style.zIndex="1000";
 //çizgi.style.visibility="hidden";
 a.onmouseover = function () {
     if(yükselme==false){
     gösterge.style.visibility = "visible";
     a.style.border = "3px solid black";
     ikincia.style.border = "3px solid white";
     çizgi.style.height = "2px";
     çizgi.style.backgroundColor = "black";
     çizgi.style.zIndex="99999"
     }
     console.log(yükselme);
 }
 a.onmouseleave = function () {
     if(yükselme==false){
     gösterge.style.visibility = "hidden";
     a.style.border = "1px solid white";
     ikincia.style.border = "1px solid white";
     çizgi.style.height = "1px";
     çizgi.style.backgroundColor = "gray";
     çizgi.style.zIndex="0"
     }
 }
 ikincia.onmouseover = function () {
    if(yükselme==false){
    gösterge.style.visibility = "visible";
    a.style.border = "3px solid black";
    ikincia.style.border = "3px solid white";
    çizgi.style.height = "2px";
    çizgi.style.backgroundColor = "black";
    çizgi.style.zIndex="99999"
    }
    console.log(yükselme);
}
ikincia.onmouseleave = function () {
    if(yükselme==false){
    gösterge.style.visibility = "hidden";
    a.style.border = "1px solid white";
    ikincia.style.border = "1px solid white";
    çizgi.style.height = "1px";
    çizgi.style.backgroundColor = "gray";
    çizgi.style.zIndex="0"
    }
}
a.style.borderRadius="0px";
ikincia.style.borderRadius="0px";
             a.style.left = (50 + left) + "px";
             ikincia.style.left = (50+ left) + "px";
             if(değer > değer2){
                ikincia.style.zIndex="50";
                a.style.zIndex="5";
                gösterge.innerHTML = "" + dat2[i] + ':<br><br><span style="padding:3px;color:white;background-color:rgba(236, 155, 114, 0.985);">' + değer  + '</span> <br><br> <span style="padding:3px;color:white;background-color:rgb(139, 220,193);">' + değer2 + "</span>";

            }
            if(değer < değer2){
                ikincia.style.zIndex="5";
                a.style.zIndex="50";
                gösterge.innerHTML = "" + dat2[i] + ':<br><br><span style="padding:3px;color:white;background-color:rgb(139, 220,193);">' + değer2  + '</span> <br><br> <span style="padding:3px;color:white;background-color:rgba(236, 155, 114, 0.985);">' + değer + "</span>";
   
            }
            if(değer==değer2){
              a.style.height = ((değer * heightindex)/2) + "px";
              gösterge.innerHTML = "" + dat2[i] + ':<br><br><span style="padding:3px;color:white;background-color:rgb(139, 220,193);">' + değer2  + '</span> &nbsp; <span style="padding:3px;color:white;background-color:rgba(236, 155, 114, 0.985);">' + değer + "</span>";


            }
            a.style.borderRadius="0px";
            ikincia.style.borderRadius="0px";
             cha.appendChild(a);
             cha.appendChild(gösterge2);
             cha.appendChild(kare);  
            cha.appendChild(kare2);
             cha.appendChild(ikincia);
        
             cha.appendChild(gösterge);
             left += index + 7;
         
     }
     }
 
 }
 
/////////////////////////////////////////bitiş////////////




//,4,85,6,4,15,5,6,1,0,5,3,1,5,5,12,0,16,51,6,51
setTimeout(yap, 100);
//setTimeout(yap, 100);
var ind=0;
var ind2=0;
setTimeout(yap2, 100);
function randomint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function yap2(){
    var ü = [];
    var g = [];
    var ggc = [];
    for(i=0;i<randomint(20,50);i++){
        g[i]=randomint(25,100);
        ggc[i]=randomint(25,100);
    }

    var gg = [25, 50, 40, 60, 70, 50, 95, 100, 9, 56, 2, 65, 15, 12, 65, 1, 6];
    var ggg = [25, 25, 40, 60, 70, 50, 95, 100, 9, 56, 2, 65, 15, 12];
    if(ind2==0){
        for (i = 0; i < g.length; i++) {
            ü[i] = "" + (i + 1) + ". Gün "
        }
        var a = new grafik("chart2", g, ü);
        var agfg = new ikiligrafik("chart5", g, ü,ggc,"peynir","kaşar");
       // var a=new grafik("chart2",g,ü);
    }
    else if(ind2==1){
        for (i = 0; i < gg.length; i++) {
            ü[i] = "" + (i + 1) + ". Gün "
        }
        var a = new  grafik("chart2", g, ü);
    
    }
    else if (ind2==2){
    
            for (i = 0; i < ggg.length; i++) {
                ü[i] = "" + (i + 1) + ". Gün "
            }
            var a = new grafik("chart2", g, ü);
    
            ind2=-1;
    }
       // var ag = new yuvarlakgrafik("chart2", g, ü);
    ind2+=1;
    çıkma=0;
}
function yap() {

    var ü = [];
    var g = [10,15,12,18,15,14,16,16,60];
    var gg = [25, 50, 40, 60, 70, 50, 95, 10];
    var ggg = [10,15,20,25,30,35,40,45,75];

if(ind==0){
    for (i = 0; i < g.length; i++) {
        ü[i] = "" + (i + 1) + ". Gün "
    }
    
    var a = new  ortalıgrafik("chart", g, ü);
    var afasdasd = new çizgigrafik("chart3", ggg, ü);
    var ad=new üstüstegrafik("chart4",g,ü);
   // var a=new grafik("chart2",g,ü);
}
else if(ind==1){
    for (i = 0; i < gg.length; i++) {
        ü[i] = "" + (i + 1) + ". Gün "
    }
    var a = new  ortalıgrafik("chart", gg, ü);

}
else if (ind==2){

        for (i = 0; i < ggg.length; i++) {
            ü[i] = "" + (i + 1) + ". Gün "
        }
        var a = new ortalıgrafik("chart", ggg, ü);

        ind=-1;
}
   // var ag = new yuvarlakgrafik("chart2", g, ü);
ind+=1;
çıkma=0;
}