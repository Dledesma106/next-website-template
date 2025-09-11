/* eslint-disable */
import type { Prisma, User, Blog, City } from "E:\\Trabajo\\next-website-template\\node_modules\\@prisma\\client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "posts";
        ListRelations: "posts";
        Relations: {
            posts: {
                Shape: Blog[];
                Name: "Blog";
            };
        };
    };
    Blog: {
        Name: "Blog";
        Shape: Blog;
        Include: Prisma.BlogInclude;
        Select: Prisma.BlogSelect;
        OrderBy: Prisma.BlogOrderByWithRelationInput;
        WhereUnique: Prisma.BlogWhereUniqueInput;
        Where: Prisma.BlogWhereInput;
        Create: {};
        Update: {};
        RelationName: "author";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User;
                Name: "User";
            };
        };
    };
    City: {
        Name: "City";
        Shape: City;
        Include: never;
        Select: Prisma.CitySelect;
        OrderBy: Prisma.CityOrderByWithRelationInput;
        WhereUnique: Prisma.CityWhereUniqueInput;
        Where: Prisma.CityWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}