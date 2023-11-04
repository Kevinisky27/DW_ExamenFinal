# Examen Final - umg (BackEnd)
Este repositorio contiene el examen final de Desarrollo Web del Octavo ciclo, de la Universidad Mariano Gálvez
la variante en la cual se trabajo es en la parte de BackEnd (Node)

> [!IMPORTANT]
> Una vez clonado el repositorio, se recomienda instalar las dependencias de Node.js

## Requerimientos: 
Crear una API RES para una entidad Producto, la cúal debe de llevar los siguientes campos:
  - Nombre
  - Precio
  - Código 
  - Existencia

## Entregable: 
1. Todos los verbos funcionales (POST, PUT, GET, DELETE)
2. Archivo `.http` de la extensión `Rest Client` para probar los endpoints
3. Debe de utilizar variables de entorno para guardar su cadena de conexión
4. Modificar el archivo `readme.md` e indicar las instrucciones para correr el proyecto
5. Crear una ruta llamada `/protected`
  - Esta ruta debe de tener una ruta llamada `/protected/set-session` el cual generá una sesión
  - Debe de existir un endpoint adicional `/protected/get-data` el cuál enviará un estatus 200 si existen una sesión para cliente, de lo contrario debe de devolver status 401
6. Pueden utilizar `SQL Server o MySQL` ya sea consultas o procedimientos almacenados
7. Subir a su cuenta de GitHub con el nombre de carpeta `Final-desarrollo-web-CARNET`

## Variables de entorno utilizadas:
```
  # Variables de entorno utilizados

```

## BackEnd (Node.js) 


## DB (mssql)
La Base de Datos que se utilizó fue SQLServer `(mssql)`, la cuál tiene un archivo llamado docker-compose.yml el cuál es el que se debe de correr con el siguiente comando:

```bash 
  docker-compose up
```