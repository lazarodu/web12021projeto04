import { IFaqData } from "interface/faq.interface";
import api from "services/api";

class FaqData {
  index() {
    return api.get<IFaqData[]>('/faqs')
  }
}

export default new FaqData()