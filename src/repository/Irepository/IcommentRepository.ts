import { CommentDto } from "../../dto/comment.dto";

export interface ICommentaRepository {

    getAll() : Promise<CommentDto>;

    getById(id: number) : Promise<CommentDto>;
 
    create(comment: CommentDto) : Promise<CommentDto>;

    update(comment: CommentDto, id: number) : Promise<CommentDto>;

    delete(id: number) : Promise<CommentDto>;
    
}
