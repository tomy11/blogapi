export interface IPost {
    postId?: number; // add
    blogId?: number; // add
    userId?: number; // add
    title?: string;
    metaTitle?: string;
    slug?: string;
    summary?: string;
    published?: number;
    createAtDate?: Date;
    updateAtDate?: Date;
    publishedAtDate?: Date;
    content?: string;
}