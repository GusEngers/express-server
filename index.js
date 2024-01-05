const app = require('./src/app');
require('dotenv').config();

async function main() {
  try {
    const { PORT = 3000, NODE_ENV } = process.env;

    if (NODE_ENV === 'production') {
      process.stdout.write('[INFO] Production mode enabled');
      // Configuraciones en modo producción
    }
    if (NODE_ENV === 'development') {
      process.stdout.write('[INFO] Development mode enabled');
      // Configuraciones en modo desarrollo
    }

    app.listen(PORT, () => {
      process.stdout.write(`[INFO] Server listening on port: ${PORT}`);
    });
  } catch (error) {
    process.stdout.write(`[ERROR] Error starting server: ${error.message}`);
  }
}

main();
