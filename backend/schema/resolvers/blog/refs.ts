import { Blog } from '@prisma/client';

import { builder } from '../../builder';

export const BlogRef = builder.prismaObject('Blog', {
    fields: (t: any) => ({
        id: t.exposeID('id'),
        title: t.exposeString('title'),
        slug: t.exposeString('slug'),
        content: t.exposeString('content'),
        excerpt: t.exposeString('excerpt', { nullable: true }),
        published: t.exposeBoolean('published'),
        publishedAt: t.expose('publishedAt', { type: 'DateTime', nullable: true }),
        authorId: t.exposeString('authorId'),
        author: t.relation('author'),
        tags: t.exposeStringList('tags'),
        createdAt: t.expose('createdAt', { type: 'DateTime' }),
        updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    }),
});

export const CreateBlogInputRef = builder.inputType('CreateBlogInput', {
    fields: (t) => ({
        title: t.string({ required: true }),
        content: t.string({ required: true }),
        excerpt: t.string(),
        published: t.boolean(),
        authorId: t.string({ required: true }),
        tags: t.stringList(),
    }),
});

export const UpdateBlogInputRef = builder.inputType('UpdateBlogInput', {
    fields: (t) => ({
        title: t.string(),
        content: t.string(),
        excerpt: t.string(),
        published: t.boolean(),
        tags: t.stringList(),
    }),
});

export const BlogCrudRef = builder
    .objectRef<{
        success: boolean;
        message?: string | null;
        blog?: Blog | null;
    }>('BlogCrudRef')
    .implement({
        fields: (t) => ({
            success: t.exposeBoolean('success'),
            message: t.exposeString('message', { nullable: true }),
            blog: t.field({
                type: BlogRef,
                nullable: true,
                resolve: (parent) => parent.blog,
            }),
        }),
    });
