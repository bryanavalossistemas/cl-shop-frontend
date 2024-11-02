import api from "@/libs/axios";

class ProductoService {
  async create({ payload }) {
    const { data } = await api.post("/productos", payload);

    return data;
  }

  async getAll() {
    const { data: respuesta } = await api.get("/productos");

    const productos = respuesta.data.map((producto) => {
      return {
        ...producto,
        imagenUrl: producto.imagenProducto.url,
        categoria: producto.categoria.nombre,
        marca: producto.marca.nombre,
      };
    });

    return productos;
  }

  async getById({ id }) {
    const { data: respuesta } = await api.get(`/productos/${id}`);

    return respuesta.data;
  }

  async update({ id, payload }) {
    const { data } = await api.put(`/productos/${id}`, payload);

    return data;
  }

  async delete({ id }) {
    const { data } = await api.delete(`/productos/${id}`);

    return data;
  }
}

export default new ProductoService();
