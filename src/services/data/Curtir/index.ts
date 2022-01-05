import { ICurtirData } from "interface/curtir.interface";
import api from "services/api";

class CurtirData {
  index() {
    return api.get<ICurtirData[]>('/curtir')
  }
  store(data: ICurtirData) {
    return api.post(`/curtir`, data)
  }
  show(id: number) {
    return api.get<ICurtirData>(`/curtir/${id}`)
  }
  update(id: number, data: ICurtirData) {
    return api.put(`/curtir/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/curtir/${id}`)
  }
}

export default new CurtirData()