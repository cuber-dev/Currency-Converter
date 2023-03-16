const root = document.documentElement;

const themeBtn = document.getElementById('theme-btn');

//Body -theme
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('bi-moon-stars');
  if (document.body.classList.contains('dark-theme')) {
    root.style.setProperty('--theme-2', 'white');
    root.style.setProperty('--white', 'black');
    root.style.setProperty('--black', 'white');

  } else {
    root.style.setProperty('--theme-2', 'black');
    root.style.setProperty('--white', 'white');
    root.style.setProperty('--black', 'black');

  }
});


const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById('amount');
const form = document.querySelector('form');
const displayContainer = document.getElementById('result-container');
const display = document.getElementById('result-displayer');


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
  display.textContent = `Wait a Second :)`;
  let URL = `https://currency-converter-api.mirzabits.repl.co/api/?from=${from}&to=${to}&amount=${amount}`;
  let response = await fetch(URL);
  try{
    if(response.ok){
      console.log('Api request success');
      let data = await response.json();
      if(data.final_converted_amount === undefined || data.final_converted_amount === null){
        display.textContent = `Invalid amount`;
        displayContainer.classList.add('error');
        return '';
      }
      displayContainer.classList.remove('error');
      
      displayContainer.classList.add('success');
      display.textContent = `${data.final_converted_amount}`;
    }else{
      console.log('Api request failed');
      displayContainer.classList.add('error');

      display.textContent = `NETWORK ERROR`;
    }
  }catch(e){
    console.log(e);
    displayContainer.classList.add('error');
    display.textContent = `Currency not found`;
  }
}