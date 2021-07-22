console.log('working');

let paramsRadio = document.getElementById('paramsRadio').addEventListener('click',()=>{
  document.getElementById('requestJsonBox').style.display='none';
  document.getElementById('parametersBox').style.display='block';

})

let jsonRadio = document.getElementById('jsonRadio').addEventListener('click',()=>{
    document.getElementById('parametersBox').style.display='none';
    document.getElementById('requestJsonBox').style.display='block';

  })