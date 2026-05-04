import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// transaction (transação atômica)
// A transação atômica vai garantir que as duas construções deêm certo ou que as duas falhem juntas. Garantindo UNICIDADE
async function createProduct() {
  const data = {
    name: "product 1",
    price: 120,
    quantity: 30,
  };

  const product = await prisma.$transaction(async (tx) => {
    const createdProduct = await tx.product.create({
      data: {
        name: data.name,
        price: data.price,
      },
    });

    await tx.stock.create({
      data: {
        productId: createdProduct.id,
        quantity: data.quantity,
      },
    });

    return createdProduct;
  });
  console.log(product);

  //   const product = await prisma.product.create({
  //     data: {
  //       name: data.name,
  //       price: data.price,
  //     },
  //   });

  //   await prisma.stock.create({
  //     data: {
  //       productId: product.id,
  //       quantity: data.quantity,
  //     },
  //   });
}

// createProduct();

// Esse modelo comitado acima pode dar certo, mas também pode dar errado. Imagina que chegamos na criação do produto e deu certo, mas na assoociação com o stock deu errado por alguma razão, aconteceu algum erro não previsto e acabou gerando uma lacuna no nosso BD. Isso gera inconsistência de dados, oque não é legal. O produto é gerado em produtos, mas na tabela estoque não é comtemplado, não é referenciado.

async function deleteProduct() {
  const id = 2;
  await prisma.$transaction(async (tx) => {
    await tx.stock.deleteMany({
      where: { productId: id },
    });
    await tx.product.delete({
      where: { id },
    });
  });
}
deleteProduct();
