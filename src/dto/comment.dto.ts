export class CommentDto {
    readonly commentId?: number;
    readonly postId?: number;
    readonly parentId?: number;
    readonly commentTitle?: string;
    readonly commentPublished?: number;
    readonly commentCreateAtDate?: Date;
    readonly commentUpdateAtDate?: Date;
    readonly commentPublishedAtDate?: Date;
    readonly commentContent?: string;
}