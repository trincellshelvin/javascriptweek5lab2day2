function santashelperCreate(){
  let name, wish; 
  name = prompt("What is your name?");
  wish = promprt("What is your Christmas Wish from Santa?");
  mySantasHelperHeader.innerHTML = `Hi ${name}, Santa is very impressed with you this year. He would like to grant your wish this year.`;
  mySantaHelperParagraph.innerHTML = `Be on the look out for your ${wish} to be under the Christmas Tree this year. Make sure to remain sweet to not make the naughty list. Merry Christmas from Santa!`
  
}
mySantasHelperButton.onclick = santashelperCreate