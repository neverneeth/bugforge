import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PingDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsInt()
  @IsNotEmpty()
  id: number;
}
