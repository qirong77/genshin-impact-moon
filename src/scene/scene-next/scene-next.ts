const div = document.createElement('div');
import './style.css';
div.className = 'scene-next';
div.innerHTML = `<div style="margin-top: 1.25rem;font-family: 'cursive', sans-serif;font-size: 0.8rem;letter-spacing: 0.125rem;animation: breathe 2s infinite ease-in-out;">
↓下一个场景
  </div>`;
const cilickHandlers: Function[] = [];
div.addEventListener('click', () => {
    cilickHandlers.forEach((fn) => fn());
});
export const sceneNext = {
    show() {
        document.body.appendChild(div);
    },
    hide() {
        div.remove();
    },
    onClick(fn: Function) {
        cilickHandlers.push(fn);
    },
};
