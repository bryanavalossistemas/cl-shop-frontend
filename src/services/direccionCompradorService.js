import api from "@/libs/axios";

class DireccionCompradorService {
  async getByUsuarioId({ usuarioId }) {
    const { data: respuesta } = await api.get(
      `/compradores/direccionComprador/usuario/${usuarioId}`
    );

    return respuesta.data;
  }
}

export default new DireccionCompradorService();
