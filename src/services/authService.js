import api from "@/libs/axios";

class UsuarioService {
  async getUsuario({ payload }) {
    const { data: respuesta } = await api.get("/auth/usuario", payload);

    return respuesta.data;
  }

  async login({ data }) {
    const { data: respuesta } = await api.post("/auth/login", data);

    return { token: respuesta.token };
  }
}

export default new UsuarioService();
