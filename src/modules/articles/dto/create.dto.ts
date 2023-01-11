import { ApiProperty } from '@nestjs/swagger';
export class CreateArticleDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean;
}
