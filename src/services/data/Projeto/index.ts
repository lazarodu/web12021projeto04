import { IProjectData } from "interface/project.interface";
import api from "services/api";

class ProjetoData {
  index() {
    return api.get<IProjectData[]>('/projetos')
  }
  store(data: IProjectData) {
    return api.post(`/projetos`, data)
  }
  show(id: number) {
    return api.get<IProjectData>(`/projetos/${id}`)
  }
  update(id: number, data: IProjectData) {
    return api.put(`/projetos/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/projetos/${id}`)
  }
}

export default new ProjetoData()