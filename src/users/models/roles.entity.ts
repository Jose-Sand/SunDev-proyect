import { ApiPropertyOptional } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'roles' })
export class Role {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    name: 'name',
    type: 'char',
    length: 40,
    nullable: false,
  })
  name: string;

  @ApiPropertyOptional({
    type: () => User,
    isArray: true,
  })
  @OneToMany(() => User, (user) => user.role)
  users: User[];
}