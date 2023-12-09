import { AxiosInstance } from "axios";
import { CreateCategoryInput, Category } from "./types/category";




export class CategoriesApi {
    constructor(private axiosInstance: AxiosInstance) { }

    async createCategory(input: CreateCategoryInput): Promise<Category> {
        const response = await this.axiosInstance.post<Category>("/category/create", input);
        return response.data;
    }
    async updateCategory(id: string, input: CreateCategoryInput): Promise<Category> {
        const response = await this.axiosInstance.put<Category>(`/category/${id}`, input);
        return response.data;
    }
    async getCategories(): Promise<Category[]> {
        const response = await this.axiosInstance.get<Category[]>("/category/all");
        return response.data;
    }
    async deleteCategory(id: string): Promise<void> {
        await this.axiosInstance.delete(`/category/${id}`);
    }
}