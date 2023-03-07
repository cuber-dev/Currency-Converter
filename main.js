let string = prompt("Enter the password For using My site : ");

let pass = 'QnV0dGVyZmx5MTQ=';
let password = btoa(string);

if (pass === password) {
  console.log("Login successful");
} else {
  alert("Invalid password, please try again.");
  window.location.reload();
}



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
  convert(amount2,from2,to2);
  console.log('sent');
}

async function convert(amount, from, to){
  let key = "7d442437dde2ce088c06329a";
  let URL = `https://v6.exchangerate-api.com/v6/${key}/pair/${from}/${to}/${amount}`;
  let response = await fetch(URL);
  try{
    if(response.ok){
      console.log('Api request success');
      let data = await response.json();
      display.textContent = `${data.conversion_result}`;
    }else{
      console.log('Api request failed');
      display.textContent = `NETWORK ERROR`;
    }
  }catch(e){
    console.log(e);
    display.textContent = `Currency not found`;
  }
}