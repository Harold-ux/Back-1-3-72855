class ProductsManager {
    #all = []
    constructor() {
        this.init();
    }
    init = async () => {
        try {
            const products = await fetch('https://fakestoreapi.com/products');
            const data = await products.json();
            this.#all = data;
        } catch (error) {
            console.log("Error:", error);
        }
    }
    readAll = () => {
        return [...this.#all];
    };
}

const productsManager = new ProductsManager();
setTimeout(() => {
    console.log("Productos disponibles:", (productsManager.readAll()));
}, 5000)