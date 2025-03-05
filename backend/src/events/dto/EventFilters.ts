import { IsEnum, IsOptional, IsString } from 'class-validator';

export class EventFiltersDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsEnum(['music', 'sports', 'culture', 'other'])
  @IsOptional()
  category?: 'music' | 'sports' | 'culture' | 'other';

  @IsEnum(['newest', 'popular', 'upcoming'])
  @IsOptional()
  sort?: 'newest' | 'popular' | 'upcoming' = 'newest';

  @IsOptional()
  page?: number = 1;

  @IsOptional()
  limit?: number = 10;
}
