import api from "@/libs/axios";

class DireccionCompradorService {
  async getDireccionCompradorByUsuarioId() {
    const { data: respuesta } = await api.get("compradores/direccionComprador");

    return respuesta.data;
  }

  async createOrUpdateDireccionCompradorByUsuarioId({ data }) {
    const { data: respuesta } = await api.put(
      "compradores/direccionComprador/createOrUpdate",
      data
    );

    return respuesta.data;
  }

  async deleteDireccionCompradorByUsuarioId() {
    const { data: respuesta } = await api.delete(
      "compradores/direccionComprador/delete"
    );

    return respuesta.data;
  }
}

export default new DireccionCompradorService();
