import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function uploads(
    file: string, 
    public_id?: string, 
    overwride?: boolean, 
    invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, 
            {
                public_id,
                overwride,
                invalidate,
                resource_type: "auto",// zip, images
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if(error) resolve(error);
                resolve(result);
            }
        );
    })
}

export function uploadVideo(
    file: string, 
    public_id?: string, 
    overwride?: boolean, 
    invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, 
            {
                public_id,
                overwride,
                invalidate,
                chunk_size: 50000,
                resource_type: "video",
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if(error) resolve(error);
                resolve(result);
            }
        );
    })
}