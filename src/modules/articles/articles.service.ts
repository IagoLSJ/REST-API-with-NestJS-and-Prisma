import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateArticleDTO } from './dto/create.dto';
import { UpdateArticleDTO } from './dto/update';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.article.findMany({
      where: {
        published: true,
      },
    });
  }
  async findById(id: string) {
    return await this.prisma.article.findFirst({
      where: {
        id,
      },
    });
  }

  async create(createArticleDTO: CreateArticleDTO) {
    return await this.prisma.article.create({ data: createArticleDTO });
  }

  async update(id: string, updateArticleDto: UpdateArticleDTO) {
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: updateArticleDto,
    });
  }

  async remove(id: string) {
    await this.prisma.article.delete({
      where: {
        id,
      },
    });

    return 'Article deletado com sucesso';
  }
}
