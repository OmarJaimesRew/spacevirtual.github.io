AFRAME.registerComponent('info-listener', {
  schema: { text: { type: 'string' } },
  init: function () {
    var infoPanel = document.querySelector('#infoPanel');
    var infoText = document.querySelector('#infoText');
    this.el.addEventListener('mouseenter', () => {
      infoText.setAttribute('value', this.data.text);
      infoPanel.setAttribute('visible', true);
    });
    this.el.addEventListener('mouseleave', () => {
      infoPanel.setAttribute('visible', false);
    });
  }
});
