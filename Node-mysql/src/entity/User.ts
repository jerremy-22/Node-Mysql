import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: () => new Date() })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt?: Date;
}

