window.onload = function () {
  chrome.runtime.sendMessage({ message: 'activate_icon' });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const msg = JSON.parse(message);
    if (msg.action === 'save') {
      const forms = document.getElementsByTagName('input');
      const formsData = [];
      for (const form of forms) {
        form.style.backgroundColor = '#CEFCB8';
        formsData.push(form.value);
      }
      chrome.storage.local.set({
        formsData: formsData,
      });
    } else if (msg.action === 'load') {
      chrome.storage.local.get('formsData', (value) => {
        const formsData = value.formsData;
        const forms = document.getElementsByTagName('input');
        for (let i = 0; i < forms.length; i++) {
          const form = forms[i];
          form.style.backgroundColor = '#FCB8E1';
          form.value = formsData[i];
        }
      });
    }
  });
};
