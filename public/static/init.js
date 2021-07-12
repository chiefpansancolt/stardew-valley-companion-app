init();

function init() {
  const defaultSettings = {
    darkMode: false,
    hasAccounts: false,
    currentCharacter: {
      label: "",
      value: ""
    }
  }

  const mySettings = window.localStorage.getItem('Settings');
  if (!mySettings) {
    window.localStorage.setItem('Settings', JSON.stringify(defaultSettings));
  }
}
