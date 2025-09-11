import { prisma } from '../../../../lib/prisma';

import { builder } from '../../builder';
import { 
    CreateBlogInputRef, 
    UpdateBlogInputRef, 
    BlogCrudRef 
} from './refs';

// Helper function to generate slug
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export const BlogMutations = builder.mutationFields((t) => ({
    createBlog: t.field({
        type: BlogCrudRef,
        args: {
            input: t.arg({
                type: CreateBlogInputRef,
                required: true,
            }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { input }) => {
            try {
                const slug = generateSlug(input.title);
                const blog = await prisma.blog.create({
                    data: {
                        title: input.title,
                        slug,
                        content: input.content,
                        excerpt: input.excerpt || null,
                        published: input.published || false,
                        publishedAt: input.published ? new Date() : null,
                        authorId: input.authorId,
                        tags: input.tags || [],
                    },
                    include: { author: true },
                });
                return {
                    success: true,
                    blog,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al crear el blog',
                };
            }
        },
    }),

    updateBlog: t.field({
        type: BlogCrudRef,
        args: {
            id: t.arg.string({ required: true }),
            input: t.arg({
                type: UpdateBlogInputRef,
                required: true,
            }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id, input }) => {
            try {
                const updateData: Record<string, unknown> = { ...input };
                
                // Generate new slug if title changed
                if (input.title) {
                    updateData.slug = generateSlug(input.title);
                }
                
                // Set publishedAt if publishing for the first time
                if (input.published === true) {
                    updateData.publishedAt = new Date();
                }

                const blog = await prisma.blog.update({
                    where: { id },
                    data: updateData,
                    include: { author: true },
                });
                return {
                    success: true,
                    blog,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al actualizar el blog',
                };
            }
        },
    }),

    deleteBlog: t.field({
        type: BlogCrudRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id }) => {
            try {
                const blog = await prisma.blog.delete({
                    where: { id },
                    include: { author: true },
                });
                return {
                    success: true,
                    blog,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al eliminar el blog',
                };
            }
        },
    }),

    publishBlog: t.field({
        type: BlogCrudRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id }) => {
            try {
                const blog = await prisma.blog.update({
                    where: { id },
                    data: {
                        published: true,
                        publishedAt: new Date(),
                    },
                    include: { author: true },
                });
                return {
                    success: true,
                    blog,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al publicar el blog',
                };
            }
        },
    }),

    unpublishBlog: t.field({
        type: BlogCrudRef,
        args: {
            id: t.arg.string({ required: true }),
        },
        authz: {
            rules: ['IsAuthenticated'],
        },
        resolve: async (_parent, { id }) => {
            try {
                const blog = await prisma.blog.update({
                    where: { id },
                    data: {
                        published: false,
                        publishedAt: null,
                    },
                    include: { author: true },
                });
                return {
                    success: true,
                    blog,
                };
            } catch (error) {
                return {
                    success: false,
                    message: 'Error al despublicar el blog',
                };
            }
        },
    }),
}));
