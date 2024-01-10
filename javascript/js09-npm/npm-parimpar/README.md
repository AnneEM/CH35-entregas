# CREAR Y PUBLICAR UN PAQUETE DE NPM

## Creación del paquete
1. Inicializar npm desde CLI con el comando
```sh
npm init
```
Me guiará a través de una serie de pasos donde me solicite información relacionada con mi package como el nombre (Nombre unico), la versión, la descripción, el punto de entrada (index.js) comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con búsquedas y licencia. 

2.-Presionar "Enter" para confirmar la info y generar el archivo package.json
> - package.json
  - Contiene información sobre el proyecto modulo que vamos a crear. Son un estandar de note.js para facilitar la estructura y ejecucion de los proyectos en el entorno de ejecucion. Y de esta manera poder compartirlo a traves del sitio de npmjs.com
  -La información se esctructura como un objeto de js con notacion JSON

3.- Crear una carpeta llamada `modules` endonde vivirá nuestro script
4.- Dentro de  `modules` crear el script (.js) con el nombe `parimpar`
5.- Crear la funcion del script y explortarlol como `export.default`
6.-Importar el script desde el archivo `index.js` con `import + function + from + ruta` 
7.-Configurar el `type: "module"` en el archivo ``package.json``
8.-Ejecutamos el programa desde el entorno de nodejs con el comando 
```sh
node index.js
```

## Publicar package en npm
1. iniciar sesion de npm desde CLI con el comando
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando 
```sh
npm publish --access=public
```