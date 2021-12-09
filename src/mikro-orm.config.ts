import {Post} from "./entities/Post";
import {__prod__} from "./constants";
import {MikroORM} from '@mikro-orm/core';
import path from "path";

export default {
    entities: [Post],
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[jt]s$/, // regex pattern for the migration files
    },
    dbName: 'lireddit',
    port: 1906,
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];
