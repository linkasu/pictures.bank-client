import axios, { AxiosInstance } from "axios";
import { CategoriesApi } from "./CaterogiresApi";
import { PicturesApi } from "./PicturesApi";

export class PictureBankApi {
    private axiosInstance: AxiosInstance;
    categories: CategoriesApi;
    pictures: PicturesApi;
    constructor(applicationToken?: string) {
        this.axiosInstance = axios.create({
            baseURL: "https://pictures.linka.su/",
            headers: {
                "Content-Type": "application/json",
                "Authorization": applicationToken ? `Bearer ${applicationToken}` : undefined
            }
        });
        this.categories = new CategoriesApi(this.axiosInstance);
        this.pictures = new PicturesApi(this.axiosInstance);
    }
}