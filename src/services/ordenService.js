import api from "@/libs/axios";

class OrdenService {
  async create({ data }) {
    const { data: respuesta } = await api.post("/ordenes", data);

    return respuesta.data;
  }
}

export default new OrdenService();
