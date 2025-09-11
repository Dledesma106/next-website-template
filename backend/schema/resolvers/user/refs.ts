import { User } from '@prisma/client';

import { builder } from '../../builder';

export const UserRef = builder.prismaObject('User', {
    fields: (t: any) => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        name: t.exposeString('name', { nullable: true }),
        role: t.exposeString('role'),
        createdAt: t.expose('createdAt', { type: 'DateTime' }),
        updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
        posts: t.relation('posts'),
    }),
});

export const CreateUserInputRef = builder.inputType('CreateUserInput', {
    fields: (t) => ({
        email: t.string({ required: true }),
        password: t.string({ required: true }),
        name: t.string(),
        role: t.string(),
    }),
});

export const UpdateUserInputRef = builder.inputType('UpdateUserInput', {
    fields: (t) => ({
        email: t.string(),
        password: t.string(),
        name: t.string(),
        role: t.string(),
    }),
});

export const AuthPayloadRef = builder.objectRef<{
    token: string;
    user: User;
}>('AuthPayload').implement({
    fields: (t) => ({
        token: t.exposeString('token'),
        user: t.field({
            type: UserRef,
            resolve: (parent) => parent.user,
        }),
    }),
});

export const UserCrudRef = builder
    .objectRef<{
        success: boolean;
        message?: string | null;
        user?: User | null;
    }>('UserCrudRef')
    .implement({
        fields: (t) => ({
            success: t.exposeBoolean('success'),
            message: t.exposeString('message', { nullable: true }),
            user: t.field({
                type: UserRef,
                nullable: true,
                resolve: (parent) => parent.user,
            }),
        }),
    });
