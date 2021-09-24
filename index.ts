import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
prisma.user.findFirst(
    {
        include: { _count: { select: { posts: true } } },
        rejectOnNotFound: true
    }
).then(user => {
    user!._count // this is nullable
})