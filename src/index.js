import "./index.html";
import "./index.scss";
import { multi, sum } from "./modules/calc";
import itemImg from './img/item1.jpg';

const img = new Image();
img.src = itemImg;
let imgWrap = document.querySelector('.itemImg');
imgWrap.append(img)



console.log(multi(2, 4));
console.log(sum(2, 4));
