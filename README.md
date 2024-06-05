<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **_env.template_** y renonbrar la copia a \_**_.env_**

6. Ejecutar la aplicación en dev:

7. Lllenar las variables de entorno definidas en el \_**_.env_**

```
npm start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Production Build

1. Crear el archivo **_.env.prod_**
2. Lllenar las variables de entorno de produccion
3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. Levantar la imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```
