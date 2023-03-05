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

function convert(amount, from, to){
  let key = "7d442437dde2ce088c06329a";
  let URL = `https://v6.exchangerate-api.com/v6/${key}/pair/${from}/${to}/${amount}`;
  let result = fetch(URL);
  result.then((response) => {
    if(response.ok){
      console.log('Api request success');
      return response.json();
    }else{
      console.log('Api request failed');
    }
  }).then((data) => {
    display.textContent = `${data.conversion_result}`;
  })
  .catch((error) => console.log(error));
}