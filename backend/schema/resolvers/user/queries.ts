import { prisma } from '../../../../lib/prisma';

import { builder } from '../../builder';
import { UserRef } from './refs';

export const UserQueries = builder.queryFields((t) => ({
    users: t.prismaField({
        type: [UserRef],
        args: {
            search: t.arg.string({ required: false }),
            skip: t.arg.int({ required: false }),
            take: t.arg.int({ required: false }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { search, skip, take }) => {
            return prisma.user.findMany({
                ...query,
                where: {
                    ...(search && {
                        OR: [
                            {
                                name: {
                                    contains: search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                email: {
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

    user: t.prismaField({
        type: UserRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { id }) => {
            const user = await prisma.user.findUnique({
                ...query,
                where: { id },
                include: { posts: true },
            });

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            return user;
        },
    }),

    userByEmail: t.prismaField({
        type: UserRef,
        args: {
            email: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { email }) => {
            const user = await prisma.user.findUnique({
                ...query,
                where: { email },
                include: { posts: true },
            });

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            return user;
        },
    }),
}));
