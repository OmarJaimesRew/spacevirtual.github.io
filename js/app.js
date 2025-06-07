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
