# Prueba Lista

Applicación realizada en React Native con TypeScript.
Se uso Metro para poder ejecutar en algun simulador la applicación.

## Configuración e Instalación

Despues de descargar se debe clonar el proyecto o descargarlo como archivo .zip para despues extraerlo.

Este proyecto usa React Native. Primero se debe entrar a la carpeta '/pruebalista' y ejecutar:

```bash
 npm install
 ```

Para iniciar el proyecto. Se debe tener adicionalmente un dispositivo (fisico o virtual) abierto, para iniciar por comando la app. Se debe realizar lo siguiente:

Para ejecutar en Android:

```bash
npm run android
```

Para ejecutar en IOS

```bash
npm run ios
```

Otra opcion seria ejecutar el comando:

```bash
npm run start
```
y despues se indica a que dispositivo quieres inicar, presionando i para ios o la a para android


## Arquitectura

El codigo fuente esta en /src

/api -- contiene la conexion con la api

/components -- contiene los componentes que se usaron

/models -- contiene el modelo que se usa en los screenn

/screen -- contiene las pantallas que vera el cliente con sus archivos de estilos y viewmodel separado del view.

