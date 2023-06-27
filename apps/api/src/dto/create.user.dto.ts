import { UserSchema } from 'shared-types';
import { createZodDto } from 'nestjs-zod';

// class is required for using DTO as a type
export class CreateUserDto extends createZodDto(UserSchema) {}
