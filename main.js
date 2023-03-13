const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById('amount');
const form = document.querySelector('form');
const display = document.getElementById('display');


form.addEventListener('submit',addValues);

function addValues(){
  event.preventDefault(); //
  let amount2 = amount.value;
  let from2 = from.options[from.selectedIndex].text;
  let to2 = to.options[to.selectedIndex].text;
  convert(Math.floor(amount2),from2,to2);
  console.log('sent');
}

async function convert(amount, from, to){

  let URL = `https://currency-converter-api.mirzabits.repl.co/api/?from=${from}&to=${to}&amount=${amount}`;
  let response = await fetch(URL);
  try{
    if(response.ok){
      console.log('Api request success');
      let data = await response.json();
      display.textContent = `${data.final_converted_amount}`;
    }else{
      console.log('Api request failed');
      display.textContent = `NETWORK ERROR`;
    }
  }catch(e){
    console.log(e);
    display.textContent = `Currency not found`;
  }
}