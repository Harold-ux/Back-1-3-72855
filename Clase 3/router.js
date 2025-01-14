import productsManager from "./data/fs/products.fs.js";
import usersManager from "./data/fs/users.fs.js";

/*  import productsManager from "./data/products.manager.js";
    import UsersManager from "./data/users.manager.js";
 */

//---> cambiamos los import para dejar de usar los gestores de la memoria y empezar a usar los gestores de fileSystem

// la funcion de enrutamiento depende de req y res
// que son son el requerimiento y la respuesta a enviar al cliente
async function router(req, res) {
  const { url /*, method */ } = req;
  const type = { "Content-type": "application/json" };

  switch (url) {
    case "/":
      const endpoints = {
        "GET '/'": "landing page of e-commmerce",
        "GET '/api/products'": "list of all products",
        "GET '/api/products/faker'": "create a faker product",
        "GET '/api/users/faker'": "create a faker user",
      };
      res.writeHead(200, type).end(JSON.stringify(endpoints));
      break;
    case "/api/products":
      const products = productsManager.read();
      res.writeHead(200, type).end(JSON.stringify({ "Productos :": products }));
      break;
    case "/api/products/faker":
      const product = await productsManager.create();
      res.writeHead(201, type).end(JSON.stringify({ response: product }));
      break;
    case "/api/users/faker":
      const user = await usersManager.create();
      res.writeHead(201, type).end(JSON.stringify({ response: user }));
      break;
    case "/api/users":
      const users = usersManager.read();
      res.writeHead(200, type).end(JSON.stringify({ response: users }));
      break;
    default:
      res.writeHead(404, type).end(JSON.stringify({ error: "Not found" }));
      break;
  }
}


export default router;
