
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Amazon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('json', { nullable: true })
    metadata?: object;
}