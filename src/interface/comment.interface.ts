export interface IComment {
    commentId?: number;
    postId?: number;
    parentId?: number;
    commentTitle?: string;
    commentPublished?: number;
    commentCreateAtDate?: Date;
    commentUpdateAtDate?: Date;
    commentPublishedAtDate?: Date;
    commentContent?: string;
}