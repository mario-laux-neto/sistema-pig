import "dotenv/config";
import { sequelize } from "./databaseConfig.js";
import app from "./app.js";

// Sincroniza os modelos com o banco de dados
sequelize
  .sync({ alter: true }) // Use { force: true } com cuidado
  .then(() => {
    console.log("Banco de dados sincronizado.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar o banco de dados:", err);
  });

// Autentica a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados!"))
  .catch((err) => console.error("Erro ao conectar no banco de dados:", err));

// Inicializa o servidor
const PORT = process.env.API_PORT || 3082;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
