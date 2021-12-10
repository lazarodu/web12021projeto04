import { IProjectData } from "interface/project.interface";
import api from "services/api";

class ProjetoData {
  index() {
    return api.get<IProjectData[]>('/projetos')
  }
}

export default new ProjetoData()