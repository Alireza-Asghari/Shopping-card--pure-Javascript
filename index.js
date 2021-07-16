let AddToCartButton = document.getElementsByClassName('btn');

for (let index = 0; index < AddToCartButton.length; index++) {
    let ButtonClicked = AddToCartButton[index];
    ButtonClicked.addEventListener('click', addToCartClicked)

}

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('card-title')[0].innerHTML;
    let price = shopItem.getElementsByClassName('row')[0].getElementsByTagName('p')[0].innerHTML;
    addToReciept(title, price);

}

function addToReciept(title, price) {
    let CreatTableDiv = document.createElement('div');
    CreatTableDiv.classList.add('table-content');
    let container = document.getElementsByClassName('container')[0];
    let cartItemName = document.getElementsByClassName('th-title');

   for (let index = 0; index < cartItemName.length; index++) {
        let titleItem = cartItemName[index].innerHTML;
        if(titleItem ==title){
            alert('the item is already selected')
            return
        }
}
    let TableContent =
        `
   <table class="table my-5 col-12 col-sm-6 col-md-3">
   <thead>
   <tr>
     <th scope="col" style="color: red; font-size:24px">Title</th>
     <th scope="col" style="color: red; font-size:24px">Price</th>
     <th scope="col" style="color: red; font-size:24px">Total</th>
     <th scope="col" style="color: red; font-size:24px">Number of Orders</th>
     
   </tr>
 </thead>
 <tbody style="background-color: rgb(158, 154, 154); ">
   <tr>
     <th scope="row" class="th-title style="font-size:24px">${title}</th>
     <td class="price-value">${price}</td>
     <td class="total-value"></td>
     <td><input type="text" class="input-td"></td>
     <td><button class="btn btn-danger ddd">Remove</button></td>
   </tr>
  
 </tbody>
   </table>
`
    CreatTableDiv.innerHTML = TableContent;
    container.append(CreatTableDiv);
    removeCardListener();
    quantityInouts();
}



function removeCardListener() {
  let selectAllRemoveButtons = document.getElementsByClassName('ddd');
  for (let index = 0; index < selectAllRemoveButtons.length; index++) {
    let selectedRow = selectAllRemoveButtons[index];
   
    selectedRow.addEventListener('click', removeRow)
  }
}

/*function removeRow(txt) {
  let ad = txt.target
  let selectedRow = Array.from(document.getElementsByClassName('table'));
  let text = ad.parentElement.parentElement.getElementsByClassName('th-title')[0].innerHTML;
  selectedRow.filter(item =>
    item.getElementsByClassName('th-title')[0].innerHTML !=+ text
     ) 
     updateTotalValue()
}*/

function removeRow(event) {
  let removeButton = event.target;
  removeButton.parentElement.parentElement.parentElement.parentElement.remove();
  updateTotalValue()
}

function quantityInouts() {
  let inputClassName = document.getElementsByClassName('input-td'); 
  for (let index = 0; index < inputClassName.length; index++) {
    let selectedInput = inputClassName[index];
    selectedInput.addEventListener('change', inputNumberValidation);
    
  }
}

function inputNumberValidation(event) {
  let input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
    console.log(input.value);
    
  }
  else if( input.value % 1 !== 0){
    input.value = Math.round(input.value);
  }
  updateTotalValue()
}

function updateTotalValue() {
 let choosedTable = document.getElementsByClassName('table');
 
 for (let index = 0; index < choosedTable.length; index++) {
   let intendedTable = choosedTable[index];
   let price = intendedTable.getElementsByClassName('price-value')[0];
   let input = intendedTable.getElementsByClassName('input-td')[0];
   let total =0;
   let priceNumberValue = parseFloat(price.innerHTML.replace('$',''));
   
   total = total + (priceNumberValue * input.value); 
   
   document.getElementsByClassName('total-value')[index].innerHTML = `$ ${total}`
 }
}

