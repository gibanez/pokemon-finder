# Pokemon finder

Buscador de pokemones

### Instalacion

Clonar repositorio

```bash
git clone git@github.com:gibanez/pokemon-finder.git
```

Ingresar a la carpeta **pokemon-finder** *(si es la carpeta que se descargo el repositorio)*

Se visualizan dos carpetas:

**server:** esta carpeta contiene el desarrollo de servidor, pagina de inicio y api correspondiente.
Esta desarrollado en node con el framework **ADONIS JS**

**client:** el contenido de esta carpeta esta el desarrollo de de un cliente javascript realizado en **ANGULAR**

## Instalar servidor

Ingresar a la carpeta **server** y ejecutar.

```bash 
npm install
```

crear el archivo **.env** con el siguiente *template* (en la raiz de la carpeta server, tambien se puede encontrar un ejemplo de esto en el archivo .env.example)

```env
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=i9NrvqHUV8TcfF0ZslROw8heqJNwxY5j
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```

Una vez instaladas todas las dependecias ejecutar el siguiente comando

```bash
node ace pokemon:populate
```

Este comando inserta los registros necesarios para utilizar la API internamente

Para levantar el servidor ejecutar
```bash
npm start
```

Esto habilitara en **localhost** puerto **3333** que puede ser modificado en el archivo **.env**

http://localhost:3333

## Instalar cliente

desde la carpeta raiz del proyecto, ingresar a la carpeta **client** y ejecutar

```bash 
npm install
```

Una vez instaladas las dependencias hay dos formas de ver el resultado

modo productivo:

```bash
npm run build
```

modo desarrollo

```bash
npm start
```
Este comando levantara un servidor de desarrollo en http://localhost:4200

# Mejoras
Esto es un desarrollo de prueba que podria ser mejorado en varios aspecto

- Testing automatizado
- Diseño responsive
- Diseño en gral de la app
- Uso de cache
- Agregar interfaces POO (no pude por tiempo pero es mi practica gral)