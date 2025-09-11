import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { prisma } from '../../../../lib/prisma';

import { builder } from '../../builder';
import { 
    CreateUserInputRef, 
    UpdateUserInputRef, 
    AuthPayloadRef, 
    UserCrudRef 
} from './refs';

// Helper functions
async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

function generateToken(userId: string): string {
    return jwt.sign({ userId }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '7d',
    });
}

export const UserMutations = builder.mutationFields((t) => ({
    createUser: t.field({
        type: UserCrudRef,
        args: {
            input: t.arg({
                type: CreateUserInputRef,
                required: true,
            }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { input }) => {
            try {
                const hashedPassword = await hashPassword(input.password);
                const user = await prisma.user.create({
                    data: {
                        email: input.email,
                        password: hashedPassword,
                        name: input.name || null,
                        role: (input.role as 'ADMIN' | 'USER') || 'USER',
                    },
                    include: { posts: true },
                });
                return {
                    success: true,
                    user,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al crear el usuario',
                };
            }
        },
    }),

    updateUser: t.field({
        type: UserCrudRef,
        args: {
            id: t.arg.string({ required: true }),
            input: t.arg({
                type: UpdateUserInputRef,
                required: true,
            }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id, input }) => {
            try {
                const updateData: Record<string, unknown> = { ...input };
                if (input.password) {
                    updateData.password = await hashPassword(input.password);
                }
                const user = await prisma.user.update({
                    where: { id },
                    data: updateData,
                    include: { posts: true },
                });
                return {
                    success: true,
                    user,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al actualizar el usuario',
                };
            }
        },
    }),

    deleteUser: t.field({
        type: UserCrudRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id }) => {
            try {
                const user = await prisma.user.delete({
                    where: { id },
                    include: { posts: true },
                });
                return {
                    success: true,
                    user,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al eliminar el usuario',
                };
            }
        },
    }),

    login: t.field({
        type: AuthPayloadRef,
        args: {
            email: t.arg.string({ required: true }),
            password: t.arg.string({ required: true }),
        },
        resolve: async (_parent, { email, password }) => {
            const user = await prisma.user.findUnique({
                where: { email },
                include: { posts: true },
            });

            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            const isValidPassword = await comparePassword(password, user.password);
            if (!isValidPassword) {
                throw new Error('Contraseña incorrecta');
            }

            const token = generateToken(user.id);

            return {
                token,
                user,
            };
        },
    }),
}));
