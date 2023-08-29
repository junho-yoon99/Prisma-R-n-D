import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const users = await prisma.user.findMany();
  //   const users = await prisma.user.findMany({
  //     include: {
  //       post: true,
  //     },
  //   });
  //   console.log(users);
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  console.log(posts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });
