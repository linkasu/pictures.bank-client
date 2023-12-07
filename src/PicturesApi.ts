import { AxiosInstance } from "axios";
import { CreatePictureInput, Picture } from "./types/picture";
import { Category } from "./types/category";

export class PicturesApi {
    constructor(private axiosInstance: AxiosInstance) { }

    getAllPictures(): Promise<Picture[]> {
        return this.axiosInstance.get("/picture/all");
    }

    getPicturesByCategory(categoryId: string): Promise<Picture[]> {
        return this.axiosInstance.get(`/picture/category/${categoryId}`);
    }

    getCategoriesByPicture(id: string): Promise<Category[]> {
        return this.axiosInstance.get(`/picture/${id}/categories`);
    }

    getPictureBufferById(id: string): Promise<Buffer> {
        return this.axiosInstance.get(`/picture/${id}/buffer`, {responseType: 'arraybuffer'}).then(response => response.data);
    }

    createPicture(data: CreatePictureInput): Promise<Picture> {
        return this.axiosInstance.post("/picture/create", data);
    }

    uploadPicture(id: string, file: Buffer): Promise<Picture> {
        const formData = new FormData();
        formData.append('file', file);
        return this.axiosInstance.post(`/picture/${id}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    deletePicture(id: string): Promise<Picture> {
        return this.axiosInstance.delete(`/picture/${id}`);
    }

    addCategory(pictureId: string, categoryId: string): Promise<void> {
        return this.axiosInstance.post(`/picture/${pictureId}/linkToCategory`, { categoryId });
    }

    removeCategory(pictureId: string, categoryId: string): Promise<void> {
        return this.axiosInstance.post(`/picture/${pictureId}/unlinkFromCategory`, { categoryId });
    }
    renamePicture(id: string, name: string): Promise<Picture> {
        return this.axiosInstance.post(`/picture/${id}/rename`, { name });
    }
    searchPictures(query: string): Promise<Picture[]> {
        return this.axiosInstance.get(`/picture/search/`, {
            params: {
                query
            }
        });
    }
}
