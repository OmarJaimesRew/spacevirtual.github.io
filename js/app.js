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

    let intersected = false;

    const start = () => {
      progressRing.removeAttribute('animation__fill');
      progressRing.removeAttribute('animation__reset');
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
      progressRing.setAttribute('animation__reset', {
        property: 'geometry.thetaLength',
        to: 0,
        dur: 0
      });
      progressRing.setAttribute('visible', false);
    };

    this.el.addEventListener('raycaster-intersection', () => {
      intersected = true;
      start();
    });

    this.el.addEventListener('raycaster-intersection-cleared', () => {
      intersected = false;
      reset();
    });

    this.el.addEventListener('click', () => {
      reset();
      if (intersected) {
        start();
      }
    });
  }
});
