import Button from './Button/Button';
import HintBlock from './HintBlock/HintBlock';

const title = 'Popover title';
const content = 'And here\'s some amazing content. It\'s very engaging. Right?';

const hint = new HintBlock(title, content);

new Button(document.body, hint.hint);
