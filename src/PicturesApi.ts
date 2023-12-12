import { AxiosInstance } from "axios";
import { CreatePictureInput, Picture } from "./types/picture";
import { Category } from "./types/category";

export class PicturesApi {
    constructor(private axiosInstance: AxiosInstance) { }

    getAllPictures(): Promise<Picture[]> {
        return this.axiosInstance.get("/picture/all").then(response => response.data)
    }

    getPicturesByCategory(categoryId: string): Promise<Picture[]> {
        return this.axiosInstance.get(`/picture/category/${categoryId}`).then(response => response.data)
    }

    getCategoriesByPicture(id: string): Promise<Category[]> {
        return this.axiosInstance.get(`/picture/${id}/categories`).then(response => response.data);
    }

    getPictureBufferById(id: string): Promise<Buffer> {
        return this.axiosInstance.get(`/picture/${id}/buffer`, { responseType: 'arraybuffer' }).then(response => response.data).then(response => response.data);
    }

    createPicture(data: CreatePictureInput): Promise<Picture> {
        return this.axiosInstance.post("/picture/create", data).then(response => response.data);
    }

    uploadPicture(id: string, file: Buffer | File, filename: string): Promise<Picture> {
        const formData = new FormData();
        formData.append('file', file, filename);
        return this.axiosInstance.post(`/picture/${id}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    }

    deletePicture(id: string): Promise<Picture> {
        return this.axiosInstance.delete(`/picture/${id}`).then(response => response.data);
    }

    addCategory(pictureId: string, categoryId: string): Promise<void> {
        return this.axiosInstance.post(`/picture/${pictureId}/linkToCategory`, { categoryId }).then(response => response.data);
    }

    removeCategory(pictureId: string, categoryId: string): Promise<void> {
        return this.axiosInstance.post(`/picture/${pictureId}/unlinkFromCategory`, { categoryId }).then(response => response.data);
    }
    renamePicture(id: string, name: string): Promise<Picture> {
        return this.axiosInstance.post(`/picture/${id}/rename`, { name }).then(response => response.data);
    }
    searchPictures(query: string): Promise<Picture[]> {
        return this.axiosInstance.get(`/picture/search/`, {
            params: {
                query
            }
        }).then(response => response.data);
    }
}
