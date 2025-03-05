import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './CreateEvent';

export class UpdateEventDto extends PartialType(CreateEventDto) {}
