import { CreateArticleDTO } from './create.dto';
import { PartialType } from '@nestjs/swagger';
export class UpdateArticleDTO extends PartialType(CreateArticleDTO) {}
