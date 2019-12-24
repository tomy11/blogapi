import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { profileProvider } from '../providers/profile.provider';
import { ProfileController } from '../controllers/profile.controller';
import { ProfileService } from '../services/profile.service';

@Module({
    imports: [DatabaseModule],
    providers: [...profileProvider, ProfileService],
    controllers: [ProfileController],
    exports: [ProfileService]
})

export class ProfileModule {}