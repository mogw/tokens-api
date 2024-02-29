// src/entity/Token.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
@Unique(["name"])
@Unique(["ticker"])
export class Token {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  ticker!: string;

  @Column({ type: "text", nullable: false })
  description!: string;
}
