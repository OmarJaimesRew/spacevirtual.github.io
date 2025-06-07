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
      progressRing.setAttribute('visible', true);
      progressRing.setAttribute('geometry', 'thetaLength', 0);
      progressRing.removeAttribute('animation__fill');
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

    this.el.addEventListener('mouseenter', start);
    this.el.addEventListener('mouseleave', reset);

  }
});

AFRAME.registerComponent('auto-info-from-textures', {
  schema: { textPrefix: { type: 'string', default: 'Info de' } },
  init: function () {
    this.el.addEventListener('model-loaded', () => {
      const mesh = this.el.getObject3D('mesh');
      if (!mesh) { return; }
      mesh.traverse(node => {
        if (!node.isMesh || !node.material || !node.material.map) { return; }
        const box = new THREE.Box3().setFromObject(node);
        const center = box.getCenter(new THREE.Vector3());

        const wrapper = document.createElement('a-entity');
        wrapper.setAttribute('position', center);
        const infoText = `${this.data.textPrefix} ${node.name}`.trim();
        wrapper.setAttribute('info-listener', `text: ${infoText}`);
        wrapper.classList.add('info-target');

        const textEl = document.createElement('a-text');
        textEl.classList.add('info-text');
        textEl.setAttribute('value', infoText);
        textEl.setAttribute('visible', 'false');
        textEl.setAttribute('align', 'center');
        textEl.setAttribute('position', '0 0 0.1');
        wrapper.appendChild(textEl);

        this.el.sceneEl.appendChild(wrapper);
      });
    });
  }
});
