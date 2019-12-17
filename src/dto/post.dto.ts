export class PostDto {
    readonly postId?: number; // add
    readonly blogId?: number; // add
    readonly userId?: number; // add
    readonly title?: string;
    readonly metaTitle?: string;
    readonly slug?: string;
    readonly summary?: string;
    readonly published?: number;
    readonly createAtDate?: Date;
    readonly updateAtDate?: Date;
    readonly publishedAtDate?: Date;
    readonly content?: string;
}