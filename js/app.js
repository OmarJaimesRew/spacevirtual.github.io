AFRAME.registerComponent('info-listener', {
  schema: { text: { type: 'string' } },
  init: function () {
    var textEl = this.el.querySelector('.info-text');
    if (textEl) {
      textEl.setAttribute('value', this.data.text);
    }
    this.el.addEventListener('click', () => {
      if (textEl) {
        textEl.setAttribute('visible', true);
      }
    });
    this.el.addEventListener('mouseleave', () => {
      if (textEl) {
        textEl.setAttribute('visible', false);
      }
    });
  }
});

AFRAME.registerComponent('cursor-progress', {
  init: function () {
    const progressRing = this.el.querySelector('#cursorProgress');
    if (!progressRing) { return; }

    const start = () => {
      progressRing.removeAttribute('animation__fill');
      progressRing.setAttribute('geometry', 'thetaLength', 0);
      progressRing.setAttribute('visible', true);
      progressRing.setAttribute('animation__fill', {
        property: 'geometry.thetaLength',
        from: 0,
        to: 360,
        dur: 3000,
        easing: 'linear'
      });
    };

    const reset = () => {
      progressRing.removeAttribute('animation__fill');
      progressRing.setAttribute('geometry', 'thetaLength', 0);
      progressRing.setAttribute('visible', false);
    };

    this.el.addEventListener('fusing', start);
    this.el.addEventListener('mouseleave', reset);
    this.el.addEventListener('click', () => {
      reset();
      // Restart immediately if still hovering over a target
      if (this.el.components.raycaster.intersectedEls.length) {
        start();
      }
    });
  }
});
