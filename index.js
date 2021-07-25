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
       <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} value">
   </div>
   <button id="addParam" class="btn btn-primary deleteParams">-</button>
</div>`

  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  let deleteParams = document.getElementsByClassName('deleteParams');
  for (item of deleteParams) {
    item.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })
  }
  addedParamCount++;
})


let submit = document.getElementById('submit').addEventListener('click', () => {
  document.getElementById('responseJsonText').value = "Wait Fetching Response.."

  let url = document.getElementById('url').value;
  let requestType = document.querySelector("input[name='requestType']:checked").value;
  let contentType = document.querySelector("input[name='contentType']:checked").value;


  if (contentType == 'params') {
    data = {};
    for (let i = 0; i < addedParamCount + 1; i++) {
      if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
        let key = document.getElementById('parameterKey' + (i + 1)).value;
        let value = document.getElementById('parameterValue' + (i + 1)).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  }
  else {
    data = document.getElementById('responseJsonText').value
  }
  console.log('URL is ', url);
  console.log('requestType is ', requestType);
  console.log('contentType is ', contentType);
  console.log('data is ', data);

  if (requestType == 'GET') {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.text())
      .then((text) => {
        document.getElementById('responseJsonText').value = text;
        // document.getElementById('responsePrism').innerHTML = text;
        // Prism.highlightAll();
      });
  }



})