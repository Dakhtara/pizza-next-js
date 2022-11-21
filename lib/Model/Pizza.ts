import { Image } from "./Image";

export type Pizza = {
    id: string;
    Name: string;
    Description: string;
    Price: number;
    slug: string;
    Image: Array<Image>;
    'Name (from Attributes)'?: Array<string>;
}
