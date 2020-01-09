import { IArticle } from "src/contracts/interfaces";
import { data } from "./seed";

export class ArticleData {
  getData(): IArticle[] {
    return data.map(x => x as IArticle);
  }
}
