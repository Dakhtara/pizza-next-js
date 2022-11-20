import { Image } from "./Image";

export type Pizza = {
    Name: string;
    Description: string;
    Price: number;
    slug: string;
    Image: Array<Image>;
}
