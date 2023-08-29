import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const targetEmail = "hoplin.dev@gmail.com";
  const user = await prisma.user.upsert({
    where: {
      email: targetEmail,
    },
    update: {
      email: "a@naver.com",
    },
    create: {
      email: targetEmail,
    },
  });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
  });
