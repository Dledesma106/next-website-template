import { prisma } from '../../lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: userPassword,
      name: 'Regular User',
      role: 'USER',
    },
  });

  console.log('✅ Regular user created:', user.email);

  // Create sample blog posts
  const samplePosts = [
    {
      title: 'Bienvenidos a Nuestro Blog',
      content: 'Este es nuestro primer artículo del blog. Aquí compartiremos noticias, consejos y actualizaciones sobre nuestros servicios.',
      excerpt: 'Descubre las últimas novedades y consejos de nuestro equipo.',
      tags: ['bienvenida', 'general'],
      authorId: admin.id,
      published: true,
      publishedAt: new Date(),
    },
    {
      title: 'Consejos para el Éxito Empresarial',
      content: 'En este artículo compartimos estrategias probadas para impulsar el crecimiento de tu negocio y alcanzar el éxito empresarial.',
      excerpt: 'Estrategias efectivas para el crecimiento empresarial.',
      tags: ['negocios', 'estrategia', 'éxito'],
      authorId: admin.id,
      published: true,
      publishedAt: new Date(),
    },
    {
      title: 'El Futuro del Marketing Digital',
      content: 'Exploramos las tendencias emergentes en marketing digital y cómo pueden beneficiar a tu empresa en los próximos años.',
      excerpt: 'Tendencias emergentes en marketing digital.',
      tags: ['marketing', 'digital', 'tendencias'],
      authorId: user.id,
      published: false,
    },
  ];

  for (const post of samplePosts) {
    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const blog = await prisma.blog.upsert({
      where: { slug },
      update: {},
      create: {
        ...post,
        slug,
      },
    });
    console.log('✅ Blog post created:', blog.title);
  }

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
