import './Button.css'

export default class Button {
  constructor(parentElement, hint) {
    this.parentElement = parentElement;
    this.hint = hint;

    this.drawButton();
    this.addListeners();
  }

  drawButton() {
    this.div = document.createElement('div');
    this.div.classList.add('box-button');

    this.button = document.createElement('button');
    this.button.classList.add('button');
    this.button.innerText = 'Click to toggle popover';

    this.div.appendChild(this.button);
    this.parentElement.appendChild(this.div);
  }

  addListeners() {
    document.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.closest('.button')) {
        console.log(1);
        this.addingHint();
      } else {
        this.RemovingHint();
      }
    })
  }

  addingHint() {
    const hint = document.querySelector('.hint-block');
    if (hint) {
      return;
    }
    document.body.appendChild(this.hint);
    this.hint.style.top = `${this.div.offsetTop - this.hint.offsetHeight - 12}px`;
    this.hint.style.left = `${(this.div.offsetLeft + this.div.offsetWidth / 2) - this.hint.offsetWidth / 2}px`;
    this.hint.classList.add('delete-opacity');
  }

  RemovingHint() {
    const hint = document.querySelector('.hint-block');
    if (hint) {
      this.hint.classList.remove('delete-opacity');
      setTimeout(() => document.body.removeChild(hint), 500);
    }
  }
}