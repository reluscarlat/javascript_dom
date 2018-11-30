/* ----------------------------------------------------------------------------------- 
console.dir(document);
console.log(document.all);
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
document.title = 'Title';
(function main() {
    document.getElementById('main-header').style = 'color:red';
})() */

/* 

// GET ELEMENT BY ID
(function a() {
  let element =  document.getElementById('main-header');
  element.style = 'background-color: red'
  element.innerText = 'Altceva';
  element.textContent = 'Ceva';
  element.innerHTML = '<p> Ceva <b>Atlceva</b> </p>';
  let subElements = element.getElementsByTagName('h1');
  for(let i = 0; i < subElements.length; i++) {
    subElements[i].innerText = 'AAA';
  }
})




// GET ELEMENT BY CLASS NAME

let items = document.getElementsByClassName('list-group-item');
for(let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
}



// GET ELEMENT BY TAG NAME

let items2 = document.getElementsByTagName('li');
items2[2].style = 'background-color:red';



// QUERY SELECTOR

let header = document.querySelector("#header-title");
header.innerText = "ceva"

let input = document.querySelector('input');
input.value = 'my input';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

let item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor = 'green';

let firstItem = document.querySelector('.list-group-item:first-child');
firstItem.style.color = 'blue';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';



// QUERY SELECTOR ALL;

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

let oddItems = document.querySelectorAll('li:nth-child(odd)');
oddItems.forEach((e) => {
  e.style.backgroundColor = 'grey';
})

----------------------------------------------------------------------------------- */
/* 
// TRAVERSING THE NODE

let itemsList = document.querySelector('#items');
console.log(itemsList.parentNode);
console.log(itemsList.parentElement);
console.log(itemsList.parentNode.parentNode);
console.log(itemsList.childNodes);
console.log(itemsList.children);

console.log(itemsList.previousSibling);
console.log(itemsList.previousElementSibling);


// CREATE A DIV

let newDiv = document.createElement('div');

// Add class to div
newDiv.className = 'hello'; 

// Add id to div
newDiv.id = 'hello1'; 

// Add attribute to div
newDiv.setAttribute('title','Hello Div');

// Create text node
let newDivText = document.createTextNode('Hello world'.toUpperCase());

// Append child
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
console.log(newDiv);

----------------------------------------------------------------------------------- */
// EMMET - TOOL FOR AUTOCOMPLETE 
//----------------------------------------------------------------------------------- 

/* function buttonClick(e) {
  alert(e);
}

let button = document.querySelector('#button');
button.addEventListener('click',f1 );
function f1(e) {
  let header = document.getElementById('main-header');
  if (header.style.backgroundColor == 'red') {
    header.style.backgroundColor = '';
  } else {
    header.style.backgroundColor = 'red';
    console.log(header.style.backgroundColor);
  }
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.class);
  
  
  let output = document.querySelector('#output');
  let ul = document.createElement('ul');
  output.appendChild(ul);
  for(element in e.target){
    let li = document.createElement('li');
    li.textContent = element + ": " + e.target[element];
    ul.appendChild(li);
  };
  output.appendChild(ul);
  output.appendChild(document.createElement('hr'));


  console.log(e.clientX);  // raportat la fereastra browser-elui
  console.log(e.clientY);
  
  console.log(e.offsetX); // raportat la buton
  console.log(e.offsetY); // raportat la 
  
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}
 */



//  let button = document.getElementById('button').addEventListener('click', runEvent);
//  let button = document.getElementById('button').addEventListener('dblclick', runEvent);
//  let button = document.getElementById('button').addEventListener('mousedown', runEvent);
//  let button = document.getElementById('button').addEventListener('mouseup', runEvent);
 /* 
  let input = document.getElementsByClassName('form-inline')[0]
              .getElementsByTagName('input')[0]; */
  //let input = document.querySelector('input[type="text"]');       
/*              
 input.addEventListener('keyup', function(e){  // keypress, keydown
   let output = document.getElementById('output');
   output.innerText = e.target.value;
 }) */
/* 
input.addEventListener('focus',runEvent);   // cut / paste
input.addEventListener('blur',runEvent);  // for clicking out
input.addEventListener('input',runEvent);
 */
/* let select = document.querySelector('select');
select.addEventListener('change',runEvent);
 */
/* function runEvent(e) {
  // console.log('Event TYPE ' + e.type);
  // console.log('value = ', e.target.value);
  e.preventDefault();
  const items = document.getElementById('items');
  let item = document.createElement('li');
  item.textContent = input.value;
  item.className = 'list-group-item';
  items.appendChild(item);
 }

 let form = document.querySelector('form');
 form.addEventListener('submit', runEvent); */

 //------------------------------------------------------------------------------
// DELETE ITEM
let deleteBtn = document.getElementById('items');
deleteBtn.addEventListener('click', function(e){
  if(e.target.className.includes('button')) {
    if(confirm('Are you sure?')){
      deleteBtn.removeChild(e.target.parentNode);
    }
  }
})

// ADD ITEM
let submit = document.getElementsByClassName('form-inline')[0]
              .getElementsByTagName('input')[1];
submit.addEventListener('click', function(e){
  e.preventDefault();
  let input = document.getElementsByClassName('form-inline')[0]
              .getElementsByTagName('input')[0];
  let items = document.getElementById('items');
  let li = `<li class="list-group-item">${input.value}
  <button class="btn btn-danger button">DELETE</button> </li>`
  items.innerHTML = items.innerHTML + li;
  input.value = '';
}) 

// FILTER ITEMS
let filter = document.getElementById('filter');
let items = document.getElementsByTagName('li');

filter.addEventListener('keyup', function(e) {
  
  Array.from(items).forEach(item => {
    var itemName = item.firstChild.textContent.toLowerCase();
    var input = e.target.value.toLowerCase();
    console.log(123);
    
    if(itemName.includes(input)) {
      item.style.display = 'block';
      console.log('block');
    } else {
      item.style.display = 'none';
      console.log('none');
    }
  });
})
 
