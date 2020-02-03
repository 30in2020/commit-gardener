import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail, IsDate } from "class-validator";

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

  @Field(() => Date)
  @Column({
    nullable: true
  })
  @IsDate()
  createDate: Date;
}
