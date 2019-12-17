import { PostDto } from "./post.dto";

export class BlogDto {
    readonly bid?:number;
    readonly blogName?: string;
    readonly blogTitle?: string;
    readonly post?: PostDto;
}
