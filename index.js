function scuberGreetingForFeet(ride){

   if (ride <= 400) {
    return 'This one is on me!';

   } else if (ride <= 2000) {
    return 'That will be twenty bucks.';

   } else if (ride <= 2500) {
    return 'I will gladly take your thirty bucks.';

   } else {
     return 'No can do.';
   }
}
scuberGreetingForFeet();


function ternaryCheckCity(city){
  // Write your code here!
  return  (city === 'NYC')? ("Ok, sounds good.") : ("No go.");
}
ternaryCheckCity();


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
    default:
  }

}
switchOnCharmFromTip();