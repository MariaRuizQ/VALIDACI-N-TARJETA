var digitsCard = prompt('¿Cuál es el número de su tarjera a validar');
function isValidCard(cardNumber){
  var sum = 0;
  var digits = cardNumber.lenght;
  var digitPair = digits % 2;

  for (var i = 0; i < digits; i++){
    var card = parseInt(cardNumber.charAt(i));
    if(i % 2 == digitPair)card *= 2;
    if (card > 9) digit -= 9;
    sum += digits;
  }
  return (sum % 10) === 0;
}
alert (isValidCard());
