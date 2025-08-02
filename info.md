# 🐻 Lab Work
- Lab 5.1
- Lab 5.2
- Lab 5.3
- Lab 5.4
- Lab 5.5.a
- Lab 5.5.b
- Lab 5.5.c
- Lab 5.6

# Swagger (Open API specification):
- Use: for other people to understand how to use your REST API
- Use ChatGPT to create a swagger.json file based on REST
- npm install swagger-ui-express 
    - this publishes the swaggerUI


Add these to the root.js file:
- import swaggerUi from 'swagger-ui-express';
- import swaggerDocument from './swagger.json' assert {type:'json'}
- app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))