
import './HintBlock.css';

export default class HintBlock {
  constructor(title, content) {
    this.title = title;
    this.content = content;

    this.createHint();
  }

  createHint() {
    this.hint = document.createElement('div');
    this.hint.classList.add('hint-block');

    const hintTitle = document.createElement('h1');
    hintTitle.classList.add('hint-title');
    hintTitle.textContent = this.title;
    this.hint.appendChild(hintTitle)

    const hintParagraph = document.createElement('p');
    hintParagraph.classList.add('hint-paragraph');
    hintParagraph.textContent = this.content;
    this.hint.appendChild(hintParagraph);
    this.drawArrowBottom();
  }

  drawArrowBottom() {
    const arrowBlock = document.createElement('div');
    arrowBlock.classList.add('arrow-bottom');
    this.hint.appendChild(arrowBlock);
  }
}