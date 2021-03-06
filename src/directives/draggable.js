import interact from 'interactjs';

const bind = (el, binding, vnode) => {
  const { arg, value } = binding;
  const className = arg || 'vue-interact-draggable';

  el.classList.add(className);

  const pos = { x: 0, y: 0 };

  const options = {
    listeners: {
      start(event) {
        vnode.context.$emit('start', event);
      },
      move(event) {
        pos.x += event.dx;
        pos.y += event.dy;

        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        vnode.context.$emit('move', event);
      },
    },
    ...value,
  };

  interact(el).draggable(options);
};

export default { bind };
