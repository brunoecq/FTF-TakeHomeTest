import { getEnvUrl } from "@/helpers";
import axios from 'axios'

export class Service {

  public static async getCommitsHistoryAsync(cb: any): Promise<void> {
    try {
      const response = await axios.get(`${getEnvUrl()}`);
      const data = await response.data;
      cb(data.reverse());
    } catch (error) {
      cb([]);
    }
  }

  public static async getCommitsHistoryAsyncByUrl(url: string): Promise<any> {
    try {
      const response = await axios.get(`${url}`);
      return response.data.reverse();
    } catch (error) {
      return [];
    }
  }
}

