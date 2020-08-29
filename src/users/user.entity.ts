import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { IUser } from './user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  joinDate: number

  @Column()
  lastDate: number
}