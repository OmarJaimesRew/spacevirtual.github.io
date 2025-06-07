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

      progressRing.setAttribute('animation__fill', {
        property: 'geometry.thetaLength',
        from: 0,
        to: 360,
        dur: 3000,
        easing: 'linear'
      });
    };

    const reset = () => {

      progressRing.setAttribute('visible', false);
    };

    this.el.addEventListener('fusing', start);
    this.el.addEventListener('mouseleave', reset);

  }
});
