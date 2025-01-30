import productsManager from "../data/fs/products.en.js";

const indexView = async (req, res, next) => {
  try {
    const all = await productsManager.readAll();
    const data = {
      title: "Home",
      message: "¡Bienvenido a mi sitio!",
      products: all,
    };
    res.status(200).render("index", data);
  } catch (error) {
    next(error);
  }
};

const productView = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const product = await productsManager.readOne(pid);

    const data = {
      title: "Producto Detail",
      product,
    };

    return res.status(200).render("product", data);
  } catch (error) {
    if (error.status === 404) {
      return res.status(404).render("product", {
        product: null,
      });
    }
    next(error);
  }
};

const cartView = (req, res, next) => {
  try {
    const data = {
      title: "Cart",
      message: "¡Bienvenido al carrito!",
    };
    return res.status(200).render("cart", data);
  } catch (error) {
    next(error);
  }
};

const profileView = (req, res, next) => {
  try {
    const data = {
      title: "Profile",
      message: "¡Datos del usuario!",
    };
    res.status(200).render("profile", data);
  } catch (error) {
    next(error);
  }
};

export { indexView, productView, cartView, profileView };
