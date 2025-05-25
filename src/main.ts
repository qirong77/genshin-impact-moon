import './style.css';
import './common/index';
import './scene/4-Nod-Krai/index';
import { gui } from './common/gui';
import { orbitCOntroler } from './common/oribtControls';
import { sceneMoon } from './scene/2-moon/index';
import { sceneMask } from './scene/1-mask';
import { scenePagenation } from './scene/scene-pagenation/scenePagenation';
import { sceneWheel } from './scene/3-wheel';
const isProd = import.meta.env.PROD;
if (isProd) {
    gui.destroy();
    orbitCOntroler.dispose();
}
sceneMask.show();
sceneMask.onClick(() => {
    scenePagenation.show();
    sceneMoon.show();
});

scenePagenation.onClick((tab, before) => {
    if (tab === 'page2' && before === 'page1') {
        sceneMoon.dispear();
        // sceneWheel.sceneWheelBackground.show();
        sceneWheel.sceneWheelSolar.show();
        console.log('123')
        // sceneMoon.show();
        // sceneWheel.sceneWheelBackground.dispear();
        // sceneWheel.sceneWheelNodeKrai.dispear();
    }
    if (tab === 'page1' && before === 'page2') {
        sceneMoon.show();
        // sceneMoon.dispear();
        // sceneWheel.sceneWheelBackground.show();
        // sceneWheel.sceneWheelNodeKrai.show();
    }
});
