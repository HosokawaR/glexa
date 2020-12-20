function sendToContents(data) {
  console.log(data);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify(data), function (response) {
      console.log(response);
    });
  });
}

const saveBtn = document.getElementById('saveFormData');
saveBtn.addEventListener('click', function () {
  sendToContents({
    action: 'save',
  });
});

const loadBtn = document.getElementById('loadFormData');
loadBtn.addEventListener('click', function () {
  sendToContents({
    action: 'load',
  });
});
