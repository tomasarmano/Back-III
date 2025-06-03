import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AdoptMe API',
      version: '1.0.0',
      description: 'API para el proyecto AdoptMe',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'password'],
          properties: {
            firstName: {
              type: 'string',
              description: 'Nombre del usuario',
              example: 'Juan',
            },
            lastName: {
              type: 'string',
              description: 'Apellido del usuario',
              example: 'Pérez',
            },
            email: {
              type: 'string',
              description: 'Email único del usuario',
              example: 'juan.perez@example.com',
            },
            password: {
              type: 'string',
              description: 'Contraseña',
              example: 'pass1234',
            },
            age: {
              type: 'integer',
              description: 'Edad del usuario',
              example: 30,
            },
            address: {
              type: 'string',
              description: 'Dirección',
              example: 'Calle Falsa 123',
            },
            phone: {
              type: 'string',
              description: 'Teléfono',
              example: '+541112345678',
            },
            role: {
              type: 'string',
              description: 'Rol del usuario (user/admin)',
              enum: ['user', 'admin'],
              example: 'user',
            },
          },
        },
        Pet: {
          type: 'object',
          required: ['name', 'species'],
          properties: {
            name: {
              type: 'string',
              description: 'Nombre de la mascota',
              example: 'Firulais',
            },
            species: {
              type: 'string',
              description: 'Especie de la mascota',
              example: 'Perro',
            },
            age: {
              type: 'integer',
              description: 'Edad de la mascota',
              example: 5,
            },
            adopted: {
              type: 'boolean',
              description: 'Estado de adopción',
              example: false,
            },
          },
        },
      },
      responses: {
        NotFound: {
          description: 'No encontrado',
        },
        BadRequest: {
          description: 'Solicitud inválida',
        },
        ServerError: {
          description: 'Error del servidor',
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerSetup = (app) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerSetup;
