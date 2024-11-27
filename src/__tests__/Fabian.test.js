import useCartStore from "../stores/cart/cartStore.js";

describe("Cart Store - updateProductQuantity", () => {
  let initialState;
  beforeEach(() => {
    const { clearCart } = useCartStore.getState();
    clearCart();
    initialState = useCartStore.getState().cart;
  });
  it("Debe actualizar la cantidad de un producto existente en el carrito", () => {
    const { addProductTocart, updateProductQuantity } = useCartStore.getState();
    addProductTocart({
      id: 1,
      nombre: "Producto 1",
      cantidad: 1,
      precioVenta: 100,
    });
    let cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 1, cantidad: 1 });
    updateProductQuantity({ id: 1 }, 5);
    cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 1, cantidad: 5 });
  });
  it("Debe mantener el carrito sin cambios si el producto no existe", () => {
    const { updateProductQuantity } = useCartStore.getState();
    updateProductQuantity({ id: 99 }, 3);
    const cart = useCartStore.getState().cart;
    expect(cart).toEqual(initialState);
  });
  it("Debe permitir actualizar a una cantidad de 0 eliminando el producto del carrito", () => {
    const { addProductTocart, updateProductQuantity } = useCartStore.getState();
    addProductTocart({
      id: 1,
      nombre: "Producto 1",
      cantidad: 1,
      precioVenta: 100,
    });
    let cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 1, cantidad: 1 });
    updateProductQuantity({ id: 1 }, 0);
    cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(0);
  });
  it("Debe eliminar un producto específico del carrito", () => {
    const { addProductTocart, removeProduct } = useCartStore.getState();
    addProductTocart({
      id: 1,
      nombre: "Producto 1",
      cantidad: 2,
      precioVenta: 100,
    });
    addProductTocart({
      id: 2,
      nombre: "Producto 2",
      cantidad: 3,
      precioVenta: 200,
    });
    let cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(2);
    expect(cart).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, cantidad: 2, precioVenta: 100 }),
        expect.objectContaining({ id: 2, cantidad: 3, precioVenta: 200 }),
      ])
    );
    removeProduct({ id: 1 });
    cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 2, cantidad: 3, precioVenta: 200 }),
      ])
    );
  });
});
