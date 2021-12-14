import {Field, ObjectType} from "type-graphql";
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

@ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property()
    createdAt: Date = new Date();

    @Field(() => String)
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    @Field()
    @Property({type: 'text', unique: true})
    username!: string;

    @Property({type: 'text'})
    password!: string;
}