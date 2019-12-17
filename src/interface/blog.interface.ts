import { IPost } from './post.interface';

export interface Blog {
    bid?: number;
    blogName?: string;
    blogTitle?: string;
    post?: IPost;
}
