import { Injectable } from '@nestjs/common';
import { CommentDto } from '../../dto/comment.dto';
import { ICommentaRepository } from '../Irepository/IcommentRepository';

@Injectable()
export class CommentRepository implements ICommentaRepository{
    getAll(): Promise<CommentDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<CommentDto> {
        throw new Error("Method not implemented.");
    }
    create(comment: CommentDto): Promise<CommentDto> {
        throw new Error("Method not implemented.");
    }
    update(comment: CommentDto, id: number): Promise<CommentDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<CommentDto> {
        throw new Error("Method not implemented.");
    }

}
