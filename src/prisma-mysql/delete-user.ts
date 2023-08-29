import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.delete({
    where: {
      email: "hoplin.dev@gmail.com",
    },
  });
  console.log(user);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });
