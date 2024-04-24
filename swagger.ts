import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      description: "API endpoints Note making CRUD",
      contact: {
        name: "Tanuj Doshi",
        email: "tanuj.doshi@dal.ca",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server",
      },
    ],
  },
  apis: ["src/routes/*.ts"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app: any) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
export default swaggerDocs;
