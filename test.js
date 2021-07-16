let buttonContent = document.getElementsByClassName('btn-success')[0];
buttonContent.addEventListener('click', clickedButton);



function clickedButton() {
    
    buttonContent.classList.remove('btn-success');
    buttonContent.classList.add('btn-danger');
    buttonContent.innerHTML = "LOG OUT"
    inputTagCreator()
}

function inputTagCreator() {
    let container = document.getElementsByClassName('container')[0];
    let div = document.createElement('div');
    div.classList.add('mt-3', 'input-content');
    div.innerHTML = `
        
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Add</span>
    </div>
    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
  </div>        

    `
    container.append(div);
   /* clickedLogOutButton()*/

}

/*function clickedLogOutButton() {
    let buttonContent = document.getElementsByClassName('btn-danger')[0];
   buttonContent.addEventListener('click', changeButton);
}
*/
/*function changeButton(event) {
   /* let clickedButton1 = event.target;*/
  /*  clickedButton1.classList.remove('btn-danger');
    clickedButton1.classList.add('btn-success');
    clickedButton1.innerHTML = 'LOG IN'*/
    
    

