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

## Controles para dispositivos móviles y PC

`index.html` ahora incluye `aframe-extras.controls.min.js` para que los componentes de control estén disponibles en todos los dispositivos. La cámara utiliza **movement-controls** junto con **universal-controls**, por lo que se puede navegar con teclado, joystick o pantalla táctil tanto en computadoras como en teléfonos inteligentes.
