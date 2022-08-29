ICARO API v1
Trabajo Integrador
Esta es la API que se ha creado para la Diplomatura Universitaria en Programación Web Full Stack de Icaro.

A continuación están los endpoints de los cuales se obtendrán los recursos para completar el Trabajo Integrador de la Diplomatura. 😎

Esta API es pública por lo que puede darse que algún recurso no retorne lo esperado 🙅🏼, puesto que otra persona puede estar en simultáneo borrando o agregando algún recurso. 📚

Recursos
GET 🧐 Listado Usuarios 👉🏼 .../api/users

GET 🧐 Listado Mensajes Recibidos 👉🏼 .../api/users/username/messages/inbox

GET 🧐 Listado Mensajes Enviados 👉🏼 .../api/users/username/messages/sent

POST 📫 Envio Datos Register 👉🏼 .../api/users

Esta petición deberá enviar por body un objeto que contenga los siguientes seis campos:

  {
      "username": "xxxxxx",
      "firstName": "xxxxxx",
      "lastName": "xxxxxx",
      "password": "xxxxxx",
      "country": "xxxxxx",
      "city": "xxxxxx"
  }
El campo id es auto generado por la API

POST 📫 Envio Datos Login 👉🏼 .../api/login

Esta petición deberá enviar por body un objeto que contenga los siguientes campos:

  {
      "username": "xxxxxx",
      "password": "xxxxxx",
  }
POST 📫 Envio Datos Mensaje 👉🏼 .../api/users/username/messages

Esta petición deberá enviar por body un objeto que contenga los siguientes campos:

  {
      "receiverId": "xxxxxx",
      "text": "xxxxxx",
  }
El campo senderId se obtiene automáticamente desde los params de la URL a través del username

DELETE 🗑 Borrado Mensaje por ID 👉🏼 .../api/messages/messageId

🏠 Ésta es la URL base
