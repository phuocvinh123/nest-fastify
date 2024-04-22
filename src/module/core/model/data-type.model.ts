import { Entity, Column, OneToMany, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { IsBoolean, IsString, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';

import { MaxGroup, Base } from '@shared';
import { Data } from '@model';

@Entity({ schema: 'core' })
@Unique(['code'])
export class DataType extends Base {
  @Column()
  @ApiProperty({ example: faker.person.jobType(), description: '' })
  @Expose()
  @IsString()
  name: string;

  @Column()
  @Expose()
  @ApiProperty({ example: faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] }), description: '' })
  @IsString()
  @MaxLength(100)
  code: string;

  @Column({ default: false })
  @Expose()
  @ApiProperty({ example: false, description: '' })
  @IsBoolean()
  isPrimary: boolean;

  @OneToMany(() => Data, (data) => data.item, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @Expose({ groups: [MaxGroup] })
  items?: Data[];
}
