import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Warehouse {
    @Column()
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    currentDate!: string;

    @Column()
    warehouseName!: string;

    @Column()
    boxDeliveryAndStorageExpr!: string;

    @Column()
    boxDeliveryBase!: string;

    @Column()
    boxDeliveryLiter!: string;

    @Column()
    boxStorageBase!: string;

    @Column()
    boxStorageLiter!: string;

}