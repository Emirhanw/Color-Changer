const body = document.querySelector("body")
const button = document.querySelector("button");
const colors = ["black","green","red","yellow","blue","#b03ec2","#561db3","#f7a014","#f7a014","#ff00a6","#0be39b"];

button.addEventListener("click",changeBackground);
let sıra = 0;

function changeBackground(){
    //rastgele bir renk
    //const randomNumber = Math.floor(Math.random()*colors.length);
    //const color = colors[randomNumber];
    //console.log(randomNumber,color);
    //body.style.backgroundColor = color;

    //Sırayla Arka Plan Rengi Seçme
    if (sıra == 11) sıra =0;
    const secilenrenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenrenk
    console.log(sıra,secilenrenk);
}