import {Controller} from 'stimulus';
import {CONSTANTS} from '../constants';
import DefaultTracking from '../default_tracking';

export default class extends Controller {
  static targets = [
    CONSTANTS.TARGETS.CONTAINER, CONSTANTS.TARGETS.NAVIGATION, CONSTANTS.TARGETS.ADD, CONSTANTS.TARGETS.MINUS,
    'farmName', 'playerName', 'uniqueName', 'errors', 'errorsCount', 'errorsList', 'addWrapper', 'farmNameOutput', 'playerNameOutput',
  ];
  static classes = [CONSTANTS.CLASSES.HIDE];
  static values = {playthroughs: Array, current: String}

  connect() {
    if (window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS) && JSON.parse(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)).playthroughs.length != 0) {
      this.playthroughsValue = JSON.parse(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)).playthroughs;
      this.navigationTarget.classList.remove(this.hideClass);
    } else {
      this.navigationTarget.classList.add(this.hideClass);
    }

    if (window.location.pathname == '/tracking') {
      this.minusTarget.classList.remove(this.hideClass);
      this.currentValue = new URLSearchParams(window.location.search).get('id');
      const store = window.localStorage.getItem(this.currentValue);
      const details = JSON.parse(store);
      this.farmNameOutputTarget.innerHTML = details.farmName;
      this.playerNameOutputTarget.innerHTML = details.playerName;
    }
  }

  create() {
    this.counter = 0;
    this.errorsListTarget.innerHTML = CONSTANTS.BLANK;

    if (this.farmNameTarget.value == '' || this.playerNameTarget.value == '' || this.uniqueNameTarget.value == '') {
      if (this.farmNameTarget.value == '') {
        this.counter += 1;
        this.errorsListTarget.appendChild(this._createErrorMsg('Missing Farm Name.'));
      }

      if (this.playerNameTarget.value == '') {
        this.counter += 1;
        this.errorsListTarget.appendChild(this._createErrorMsg('Missing Character Name.'));
      }

      if (this.uniqueNameTarget.value == '') {
        this.counter += 1;
        this.errorsListTarget.appendChild(this._createErrorMsg('Missing Unique Name.'));
      }

      this.errorsCountTarget.innerHTML = this.counter;
      this.errorsTarget.classList.remove(this.hideClass);
    } else {
      const track = new DefaultTracking(this.farmNameTarget.value, this.playerNameTarget.value, this.uniqueNameTarget.value);
      if (window.localStorage.getItem(this.uniqueNameTarget.value) != null) {
        this.counter += 1;
        this.errorsListTarget.appendChild(this._createErrorMsg('The Unique Name (' + this.uniqueNameTarget.value + ') is already being used please define a different one!'));
        this.errorsTarget.classList.remove(this.hideClass);
      } else {
        if (window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS) != null) {
          window.localStorage.setItem(CONSTANTS.PLAYTHROUGHS, track.mainAdd(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)));
        } else {
          window.localStorage.setItem(CONSTANTS.PLAYTHROUGHS, track.main());
        }

        this.playthroughsValue = JSON.parse(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)).playthroughs;
        window.localStorage.setItem(this.uniqueNameTarget.value, track.baseOutput());
        this.addWrapperTarget.dataset.modalSuccessSaveValue = true;
        this.farmNameTarget.value = CONSTANTS.BLANK;
        this.playerNameTarget.value = CONSTANTS.BLANK;
        this.uniqueNameTarget.value = CONSTANTS.BLANK;
        this.errorsTarget.classList.add(this.hideClass);
      }
    }
  }

  remove() {
    var r = confirm('Are you sure you want to remove this Farm from tracking? If you do the data will not be recoverable unless downloaded and saved locally.');
    if (r == true) {
      const current = JSON.parse(window.localStorage.getItem(this.currentValue));
      const tracker = new DefaultTracking(current.farmName, current.playerName, current.uniqueName);
      window.localStorage.setItem(CONSTANTS.PLAYTHROUGHS, tracker.remove(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)));
      window.localStorage.removeItem(this.currentValue);
      this.currentValue = CONSTANTS.BLANK;
      this.playthroughsValue = JSON.parse(window.localStorage.getItem(CONSTANTS.PLAYTHROUGHS)).playthroughs;
      window.location.href = '/';
    }
  }

  createWithKeyboard(e) {
    if (e.keyCode === 13) {
      this.create();
    }
  }

  playthroughsValueChanged() {
    this.navigationTarget.classList.remove(this.hideClass);
    this.containerTarget.innerHTML = CONSTANTS.BLANK;
    for (let index = 0; index < this.playthroughsValue.length; index++) {
      const data = this.playthroughsValue[index];
      this.containerTarget.appendChild(this._createLink(data.farmName, data.playerName, data.uniqueName));
    }
  }

  _createErrorMsg(msg) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(msg));
    return li;
  }

  _createLink(farmName, playerName, uniqueName) {
    const a = document.createElement('a');
    a.classList.add('-m-3', 'p-3', 'block', 'rounded-md', 'hover:bg-gray-50', 'transition', 'ease-in-out', 'duration-150');
    a.setAttribute('href', '/tracking?id=' + uniqueName);

    const p1 = document.createElement('p');
    p1.classList.add('text-base', 'font-medium', 'text-gray-900');
    p1.appendChild(document.createTextNode(farmName + ' (' + uniqueName + ')'));
    const p2 = document.createElement('p');
    p2.classList.add('mt-1', 'text-sm', 'text-gray-500');
    p2.appendChild(document.createTextNode(playerName));

    a.appendChild(p1);
    a.appendChild(p2);
    return a;
  }
}
