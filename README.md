# Space Virtual Test Setup

This repository includes automated tests using **Jest** and **Puppeteer**.

## Instalaci\xC3\xB3n

1. Aseg\xC3\xBArate de tener [Node.js](https://nodejs.org/) instalado.
2. Instala las dependencias:

```bash
npm install
```

## Ejecutar pruebas

Para ejecutar las pruebas usa:

```bash
npm test
```

Esto abrir\xC3\xA1 la escena `aframe_colisiones/index.html` en un navegador sin cabeza y verificar\xC3\xA1 que no existan errores en la consola durante la inicializaci\xC3\xB3n.

## Controles para dispositivos móviles

La escena principal (`index.html`) habilita **wasd-controls**, **touch-controls** y **universal-controls** de *A-Frame Extras* para ofrecer soporte integrado a teclado, pantalla táctil y gamepad. Estos controles simplifican la navegación en celulares, smartphones y navegadores de escritorio.
