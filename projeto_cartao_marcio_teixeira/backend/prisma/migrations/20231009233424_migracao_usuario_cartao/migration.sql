-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartao" (
    "numero" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "cartao_numero_key" ON "cartao"("numero");

-- AddForeignKey
ALTER TABLE "cartao" ADD CONSTRAINT "cartao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
