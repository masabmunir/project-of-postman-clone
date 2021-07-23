console.log('working');

function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

let addedParamCount = 0;

let paramsRadio = document.getElementById('paramsRadio').addEventListener('click', () => {
  document.getElementById('requestJsonBox').style.display = 'none';
  document.getElementById('parametersBox').style.display = 'block';

})

let jsonRadio = document.getElementById('jsonRadio').addEventListener('click', () => {
  document.getElementById('parametersBox').style.display = 'none';
  document.getElementById('requestJsonBox').style.display = 'block';

})

let addParam = document.getElementById('addParam').addEventListener('click', () => {
  let params = document.getElementById('params');
  let string = `<div class="form-row">
   <legend class="col-form-label col-sm-2 pt-0">Parameter ${addedParamCount + 2}</legend>

   <div class="form-group col-md-4">

       <input type="email" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
   </div>
   <div class="form-group col-md-4">
       <input type="password" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} value">
   </div>
   <button id="addParam" class="btn btn-primary deleteParams">-</button>
</div>`

  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  let deleteParams = document.getElementsByClassName('deleteParams');
  for (item of deleteParams) {
   item.addEventListener('click',(e)=>{
     e.target.parentElement.remove();
   })
  }
  addedParamCount++;
})


