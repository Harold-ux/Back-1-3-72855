import { faker } from "@faker-js/faker";
import http from "http";
import router from "./router.js";

const server = http.createServer(router);
const port = 8080;
const ready = () => console.log(`Server running on port ${port}`);
server.listen(port, ready);

const products = faker.commerce.product()
const products2 = faker.commerce.product()
const price = faker.commerce.price()
const price2 = faker.commerce.price()


console.log(`Product: ${products} - Price: ${price}`);
console.log(`Product: ${products2} - Price: ${price2}`);