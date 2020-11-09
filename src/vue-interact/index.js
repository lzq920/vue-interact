import DraggingMixin from './DraggingMixin';
import ResizingMixin from './ResizingMixin';

import draggable from '../directives/draggable';

export { DraggingMixin };
export { ResizingMixin };

const VueInteract = {
  DraggingMixin,
  ResizingMixin,
  install: (Vue) => {
    if (Vue.vueInteractInstalled) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    Vue.vueInteractInstalled = true;

    Vue.directive('draggable', draggable);
  },
};

export default VueInteract;
