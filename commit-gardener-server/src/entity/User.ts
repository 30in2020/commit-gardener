import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { InputType, ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({
    nullable: true
  })
  userId: string;

  @Field(() => String)
  @Column({
    nullable: true
  })
  @IsEmail()
  email: string;

  @Field(() => String)
  @Column({
    nullable: true
  })
  accessToken: string;

  @Field(() => String)
  @Column({
    nullable: true
  })
  deviceToken: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: number;
}

@InputType()
export class CreateUserInput {
  @Field()
  userId: string;
  @Field()
  email: string;
  @Field()
  accessToken: string;
  @Field()
  deviceToken: string;
}
