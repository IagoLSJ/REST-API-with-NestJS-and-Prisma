import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const pots = await prisma.article.create({
    data: {
      title: 'Prisma Adds Support for MongoDB',

      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',

      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",

      published: false,
    },
  });

  const otherPost = await prisma.article.create({
    data: {
      title: 'Prisma Adds Support for MySql',

      body: 'Support for MySql has been one of the most requested features since the initial release of...',

      description:
        "We are excited to share that today's Prisma ORM release adds stable support for M!",

      published: true,
    },
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
