import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// create

async function create() {
  const data = {
    firstName: "Helena",
    lastName: "Zielinski",
    email: "Helena@gmail.com",
    password: "87654321",
    phone: "48999999999",
  };

  await prisma.user.create({
    data,
  });
}

// create();

// update

async function update() {
  const id = 1;

  const data = {
    password: "1245687910",
  };

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: data.password,
    },
  });
}

// update();

// delete

async function deleteUser() {
  const id = 1;

  await prisma.user.delete({
    where: {
      id,
    },
  });
}

// deleteUser();

// métodos de busca findMany | findUnique

//findMany = retorna todos os registros de uma tabela
async function fetchUser() {
  const user = await prisma.user.findMany({
    include: {
      adresses: true,
    },
  });
  console.log(user);
}

// fetchUser();

//findUnique => Vai retornar baseado em campos ÚNICOS
async function fetchUserUnique() {
  const user = await prisma.user.findMany({
    include: {
      adresses: true,
    },
  });
  console.log(user);

  const email = "cledeocir@gmail.com";

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      adresses: true,
    },
  });
}

// fetchUserUnique();

//findFirst => retorna apenas o primeiro registro, mesmo que exista outros que satisfação a mesma condição
// Ordena do mais antigo pro mais recente e vice versa utilizando o método orderBy
async function fetchFirstUser() {
  const userFetch = await prisma.user.findFirst({
    where: {
      email: {
        contains: "@gmail.com",
      },
    },
    orderBy: {
      createdAt: "asc", // ou desc
    },
  });
  // orderBy também pode ser utilizado dentro do findMany
  await prisma.user.findMany({
    orderBy: {
      createdAt: "desc", //ou asc
    },
  });

  console.log(userFetch);
}

fetchFirstUser();
