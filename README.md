
# Sign Language Detector

Este proyecto consiste en un traductor de lenguaje de señas a tiempo real desarrollado con TensorFlow para el reconocimiento de gestos y Django Rest Framework para la creación de una API RESTful. La interfaz de usuario se implementa con React.

## Funcionalidades
* Reconocimiento de lenguaje de señas a tiempo real: El sistema utiliza un modelo de TensorFlow entrenado para reconocer gestos de lenguaje de señas en tiempo real a partir de una cámara web o un video.

* API RESTful: La API RESTful permite: Crear, leer, actualizar y eliminar (CRUD) usuarios, correos electrónicos y traducciones.

* Enviar traducciones por correo electrónico en forma de archivos de texto.

* Interfaz de usuario React: La interfaz web amigable para interactuar con el sistema, incluyendo: Captura de video en tiempo real para el reconocimiento de gestos.  Visualización de la traducción en texto. Opción para enviar la traducción por correo electrónico.

## API Reference

#### Obtener y enviar datos

```http
  GET localhost:8000/traductor/api/
  POST localhost:8000/traductor/api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` | **Required** Obtiene o envia datos |

#### Obtener, eliminar y actualizar datos

```http
  GET localhost:8000/traductor/api/${id}
  DELETE localhost:8000/traductor/api/${id}
  UPDATE localhost:8000/traductor/api/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/${id}`      | `string` | **Required**. Id de un item para obtenerlo y realizar cambios necesarios |

```http
  POST localhost:8000/send_email/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/`      | `string` | **Required**. Sube un elemento con valores "name, email, content" a la base de datos y envia correo|



## Deploy

Clonar el proyecto

```bash
git clone https://github.com/KawKuroi/SLD-Proyect.git
```

### Iniciar Back-end

Acceder a la ruta inicial del proyecto './SLD_proyect'

Si tiene descargado Python con versión superior a la ^3.12 y descargar el entorno virtual
```bash
  pip install poetry
```
Iniciar el entorno virtual
```bash
  poetry shell
```
Descargar paquetes, librerias y dependencias
```bash
  poetry install
```
Iniciar el servidor Backend desde el puerto 8000
```bash
  python -m BACKEND.manage runserver
```

### Iniciar Front-end

Acceder a la ruta inicial del proyecto './SLD_proyect/FRONTEND'

hay que tener descargado nodeJS, y con el siguiente comando se descargan paquetes, librerias y dependencias
```bash
  npm install
```
Iniciar el Frontend desde el puerto 3000
```bash
  npm run dev
```


## Tech Stack

**Client:** React, JavaScript, HTML, CSS

- Implementado en Python con Django Rest Framework. Maneja la lógica del negocio, la comunicación con la base de datos y la API RESTful. Utiliza TensorFlow para el reconocimiento de lenguaje de señas.


**Server:** Django, Django Rest Framework, Tensorflow, Python, SQLite

- Implementado en React y JavaScript. Proporciona la interfaz de usuario para la interacción con el sistema. Consume la API RESTful del backend para obtener y enviar datos.

## Authors

- [@KawKuroi](https://www.github.com/KawKuroi)
- [@Diego9705](https://www.github.com/Diego9705)
- [@JeRamirez25](https://www.github.com/JeRamirez25)
- [@Saragap1](https://www.github.com/Saragap1)

