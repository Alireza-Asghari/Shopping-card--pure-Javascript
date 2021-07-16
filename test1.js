/*let buttonStatus = {
    isShow: true,
}

let button = document.getElementsByClassName('btn-success')[0];

button.addEventListener('click', buttonValidation);

function buttonValidation() {
    if (buttonStatus.isShow == true) {
        buttonStatus.isShow = false;
        inputTagCreator();
        button.textContent = 'LOGOUT';
        button.classList.add('bg-danger');
        button.classList.remove('bg-success');

    } else {
        buttonStatus.isShow = true;
        button.textContent = 'LOGOUT';
        button.classList.remove('bg-danger');
        button.classList.add('bg-success');
        document.getElementsByClassName('input-content')[0].remove();

    }
}
*/
/*
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
    

}*/
let inputClassName = document.getElementsByClassName('in'); 
 inputClassName.addEventListener('change', inputNumberValidation);

function inputNumberValidation(event) {
    let input = event.target;
    console.log(input.value);
}

