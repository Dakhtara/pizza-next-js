export type Image = {
    url: string;
    filename: string;
    height: number;
    width: number;
    type: string;
    size: number;
    thumbnails: {
        small: {
            url: string;
            height: number;
            width: number;
        },
        large: {
            url: string;
            height: number;
            width: number;
        },
        full: {
            url: string;
            height: number;
            width: number;
        }
    }
}