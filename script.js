function changeColor(){
   var hex_Numbers =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
   var hexcode='';
   for(var i=0;i < 6;i++){
    var random_index = Math.floor(Math.random() * hex_Numbers.length);
    hexcode += hex_Numbers[random_index]
   }
   document.getElementById("hex-code").innerHTML = hexcode;
   document.getElementsByTagName("body")[0].style.background ="#" + hexcode;

   
}
