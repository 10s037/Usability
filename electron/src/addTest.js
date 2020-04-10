const {ipcRenderer} = require('electron');

// Handle submit button
function getCheckedBoxes(e){
  e.preventDefault();
  const label = document.getElementById('test-label');
  const checkboxes = document.getElementsByName('test');
  const checkedBoxes = [];

  // Add checked boxes to array to send to main process
  for (var i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
      checkedBoxes.push(checkboxes[i].value);
    }
  }

  //if no test is selected send all tests to main process
  if(checkedBoxes.length === 0){
    checkboxes.forEach(box => {
      checkedBoxes.push(box.value);
    });
  }
  var data = {'label': label.value, 'boxes': checkedBoxes};
  ipcRenderer.send('add-test', data);
}

// Uncheck all other boxes if all tests is checked
function allChecked(){
  allCheckbox = document.getElementById('all');
  let allTests;
  if (allCheckbox.checked) {
    allTests = document.getElementsByName('test');
    allTests.forEach(test => {
      test.checked = false;
    });
  }
}