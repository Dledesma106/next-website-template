import { prisma } from '../../../../lib/prisma';

import { builder } from '../../builder';
import { BlogRef } from './refs';

export const BlogQueries = builder.queryFields((t) => ({
    blogs: t.prismaField({
        type: [BlogRef],
        args: {
            search: t.arg.string({ required: false }),
            skip: t.arg.int({ required: false }),
            take: t.arg.int({ required: false }),
            published: t.arg.boolean({ required: false }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { search, skip, take, published }) => {
            return prisma.blog.findMany({
                ...query,
                where: {
                    ...(published !== undefined && published !== null && { published }),
                    ...(search && {
                        OR: [
                            {
                                title: {
                                    contains: search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                content: {
                                    contains: search,
                                    mode: 'insensitive',
                                },
                            },
                        ],
                    }),
                },
                orderBy: {
                    createdAt: 'desc',
                },
                ...(typeof skip === 'number' &&
                    typeof take === 'number' && {
                        skip,
                        take,
                    }),
            });
        },
    }),

    blog: t.prismaField({
        type: BlogRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { id }) => {
            const blog = await prisma.blog.findUnique({
                ...query,
                where: { id },
                include: { author: true },
            });

            if (!blog) {
                throw new Error('Blog no encontrado');
            }

            return blog;
        },
    }),

    blogBySlug: t.prismaField({
        type: BlogRef,
        args: {
            slug: t.arg.string({ required: true }),
        },
        resolve: async (query, _parent, { slug }) => {
            const blog = await prisma.blog.findUnique({
                ...query,
                where: { slug },
                include: { author: true },
            });

            if (!blog) {
                throw new Error('Blog no encontrado');
            }

            return blog;
        },
    }),

    publishedBlogs: t.prismaField({
        type: [BlogRef],
        args: {
            search: t.arg.string({ required: false }),
            skip: t.arg.int({ required: false }),
            take: t.arg.int({ required: false }),
        },
        resolve: async (query, _parent, { search, skip, take }) => {
            return prisma.blog.findMany({
                ...query,
                where: {
                    published: true,
                    ...(search && {
                        OR: [
                            {
                                title: {
                                    contains: search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                content: {
                                    contains: search,
                                    mode: 'insensitive',
                                },
                            },
                        ],
                    }),
                },
                orderBy: {
                    publishedAt: 'desc',
                },
                include: { author: true },
                ...(typeof skip === 'number' &&
                    typeof take === 'number' && {
                        skip,
                        take,
                    }),
            });
        },
    }),
}));
