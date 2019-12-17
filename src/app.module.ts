import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog.module';
import { BlogController } from './controllers/blog.controller';
import { BlogService } from './services/blog.service';
import { BlogRepository } from './repository/blog.repository';

@Module({
  imports: [BlogModule],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
})
export class AppModule {}
