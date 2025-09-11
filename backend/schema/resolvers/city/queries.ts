import { prisma } from '../../../../lib/prisma';

import { builder } from '../../builder';
import { CityRef } from './refs';

export const CityQueries = builder.queryFields((t) => ({
    cities: t.prismaField({
        type: [CityRef],
        args: {
            search: t.arg.string({ required: false }),
            skip: t.arg.int({ required: false }),
            take: t.arg.int({ required: false }),
            provinceId: t.arg.string({ required: false }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { search, skip, take }) => {
            return prisma.city.findManyUndeleted({
                ...query,
                where: {
                    ...(search && {
                        name: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    })
                },
                orderBy: {
                    name: 'asc',
                },
                ...(typeof skip === 'number' &&
                    typeof take === 'number' && {
                        skip,
                        take,
                    }),
            } as any);
        },
    }),

    citiesCount: t.int({
        args: {
            search: t.arg.string({ required: false }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { search }) => {
            return prisma.city.count({
                where: {
                    deleted: false,
                    ...(search && {
                        name: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    }),
                },
            });
        },
    }),

    city: t.prismaField({
        type: CityRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (query, _parent, { id }) => {
            const city = await prisma.city.findUniqueUndeleted({
                ...query,
                where: { id },
            } as any);

            if (!city) {
                throw new Error('Localidad no encontrada');
            }

            return city;
        },
    }),
}));
