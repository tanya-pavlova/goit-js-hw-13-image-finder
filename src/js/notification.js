import * as PNotify from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const enterImageName = function enterImgName() {
  PNotify.notice({
    text: 'Введите название картинки!',
    delay: 1500,
  });
};

export default { enterImageName };