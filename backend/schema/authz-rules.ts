import { preExecRule } from '@graphql-authz/core';
import jwt from 'jsonwebtoken';

import { YogaContext } from './types';
import { prisma } from '../../lib/prisma';

const getUserFromJWT = async (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { userId: string };
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
        });
        return user;
    } catch (error) {
        console.error('JWT verification error:', error);
        return null;
    }
};

const getUserFromAuthorizationHeader = async (context: YogaContext) => {
    const authorization = context.request.headers.get('Authorization');
    if (!authorization) {
        return null;
    }

    const token = authorization.replace('Bearer ', '');
    return getUserFromJWT(token);
};

const getUserFromContext = async (context: YogaContext) => {
    return await getUserFromAuthorizationHeader(context);
};

const IsAuthenticated = preExecRule({
    error: 'No estás autenticado',
})(async (context: YogaContext, _fieldArgs) => {
    const user = await getUserFromContext(context);
    if (!user) {
        return false;
    }

    context.user = user;
    return true;
});

const IsAdmin = preExecRule({
    error: 'No tienes permisos de administrador',
})(async (context: YogaContext, _fieldArgs) => {
    const user = await getUserFromContext(context);
    if (!user) {
        return false;
    }

    if (user.role === 'ADMIN') {
        return true;
    }

    return false;
});

export const authzRules = {
    IsAuthenticated,
    IsAdmin,
} as const;
