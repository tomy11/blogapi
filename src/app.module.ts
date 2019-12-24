import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog.module';
import { BlogController } from './controllers/blog.controller';
import { BlogService } from './services/blog.service';
import { BlogRepository } from './repository/base/blog.repository';
import { Connection } from 'typeorm';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
