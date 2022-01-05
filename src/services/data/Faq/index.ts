import { IFaqData } from "interface/faq.interface";
import api from "services/api";

class FaqData {
  index() {
    return api.get<IFaqData[]>('/faqs')
  }
  store(data: IFaqData) {
    return api.post(`/faqs`, data)
  }
  show(id: number) {
    return api.get<IFaqData>(`/faqs/${id}`)
  }
  update(id: number, data: IFaqData) {
    return api.put(`/faqs/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/faqs/${id}`)
  }
}

export default new FaqData()