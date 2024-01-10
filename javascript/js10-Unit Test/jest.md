# PRUEBAS UNITARIAS CON JEST

## Inicializamos node
```sh
$ npm init -y
```
## Crear un archivo Index.js
## Instalar y configurar jest
```sh
npm install --save-dev jest
```

En el `package.json`, modificar los scripts de test
```javascript
    "scripts": {
        "test": "jest"
    },
```

## Crear carpeta `modules` y dentro el archivo `calculator.js`
## Crear carpeta `Tests` donde vivirán las pruebas. Crear en esa carpeta el archivo `calculator.test.js`
 Creamos los métodos y funciomes, importandolos y exportandolos
 
 Ejecutamos mediante el comando 
 `npm test`