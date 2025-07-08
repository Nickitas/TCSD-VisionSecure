import { queryOptions } from '@tanstack/react-query';
import { apiInstance, ApiMethodValues, ApiTypeValues } from '@/shared/api/instance';
import { 
    GetFavoriteCamerasAllResponse,
    GetFavoriteCameraByIdParams,
    GetFavoriteCameraByIdResponse,
    AddFavoriteCameraParams, 
    AddFavoriteCameraResponse, 
    DeleteFavoriteCameraParams,
    DeleteFavoriteCameraResponse,
} from '../types';


class FavoriteCamerasApi {
    private baseKey: string;

    constructor(private readonly prefixKey: string) {
        this.baseKey = `${this.prefixKey}/favorite`;
    }

    getFavoriteCamerasAll = () => {
        return queryOptions({
            queryKey: [this.baseKey, 'favorite', 'all'],
            queryFn: ({ signal }) =>
                apiInstance<GetFavoriteCamerasAllResponse>({
                    type: ApiTypeValues.MAIN,
                    path: `${this.baseKey}/favorite/all`,
                    signal,
                }),
        });
    };

    getFavoriteCameraById = ({ id }: GetFavoriteCameraByIdParams) => {
        return queryOptions({
            queryKey: [this.baseKey, 'favorite', 'byId', id],
            queryFn: ({ signal }) =>
                apiInstance<GetFavoriteCameraByIdResponse>({
                    type: ApiTypeValues.MAIN,
                    path: `${this.baseKey}/favorite/${id}`,
                    signal,
                }),
        });
    };

    addFavoriteCamera = ({ id }: AddFavoriteCameraParams) => {
        return apiInstance<AddFavoriteCameraResponse>({
            type: ApiTypeValues.MAIN,
            path: `${this.baseKey}/favorite/${id}`,
            method: ApiMethodValues.POST,
        });
    };


    deleteFavoriteCamera = ({ id }: DeleteFavoriteCameraParams) => {
        return apiInstance<DeleteFavoriteCameraResponse>({
            type: ApiTypeValues.MAIN,
            path: `${this.baseKey}/favorite/delete?camera_id=${id}`,
            method: ApiMethodValues.POST,
        });
    };
}

export const favoriteCamerasApi = new FavoriteCamerasApi('cameras');