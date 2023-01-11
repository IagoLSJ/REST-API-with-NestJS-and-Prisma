import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
