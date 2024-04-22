"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
function setupSwagger(app) {
    const documentBuilder = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setDescription(`### REST
Routes is following REST standard (Richardson level 3)
<details><summary>Detailed specification</summary>
<p>
**List:**
  - \`GET /<resources>/\`
    - Get the list of **<resources>** as admin
  - \`GET /user/<user_id>/<resources>/\`
    - Get the list of **<resources>** for a given **<user_id>**
    - Output a **403** if logged user is not **<user_id>**
**Detail:**
  - \`GET /<resources>/<resource_id>\`
    - Get the detail for **<resources>** of id **<resource_id>**
    - Output a **404** if not found
  - \`GET /user/<user_id>/<resources>/<resource_id>\`
    - Get the list of **<resources>** for a given **user_id**
    - Output a **404** if not found
    - Output a **403** if:
      - Logged user is not **<user_id>**
      - The **<user_id>** have no access to **<resource_id>**
**Creation / Edition / Replacement / Suppression:**
  - \`<METHOD>\` is:
    - **POST** for creation
    - **PATCH** for update (one or more fields)
    - **PUT** for replacement (all fields, not used)
    - **DELETE** for suppression (all fields, not used)
  - \`<METHOD> /<resources>/<resource_id>\`
    - Create **<resources>** with id **<resource_id>** as admin
    - Output a **400** if **<resource_id>** conflicts with existing **<resources>**
  - \`<METHOD> /user/<user_id>/<resources>/<resource_id>\`
    - Create **<resources>** with id **<resource_id>** as a given **user_id**
    - Output a **409** if **<resource_id>** conflicts with existing **<resources>**
    - Output a **403** if:
      - Logged user is not **<user_id>**
      - The **<user_id>** have no access to **<resource_id>**
</p>
</details>`)
        .addBearerAuth();
    documentBuilder.setVersion('1.0');
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder.build());
    swagger_1.SwaggerModule.setup('documentation', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customCss: 'div.swagger-ui > div:last-child > .wrapper:last-child, .swagger-ui > div:nth-child(2) > .wrapper > section > div > span:nth-child(1){display: none}',
    });
    const logger = new common_1.Logger('___DevLog___');
    logger.log(`Documentation: http://localhost:${config_1.appConfig.SERVER_PORT}/documentation`);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=setup-swagger.js.map