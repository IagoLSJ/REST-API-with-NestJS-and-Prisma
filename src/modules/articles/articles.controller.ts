import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDTO } from './dto/create.dto';
import { UpdateArticleDTO } from './dto/update';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOne(@Param('id') id: string) {
    return this.articlesService.findById(id);
  }

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDTO: CreateArticleDTO) {
    return this.articlesService.create(createArticleDTO);
  }
  @Put(':id')
  @ApiOkResponse({ type: ArticleEntity })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDTO) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
