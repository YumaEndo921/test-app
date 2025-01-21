const { Sequelize } = require('sequelize');

const db = process.env.DATABASE_URL

const sequelize = new Sequelize(db,
    {
        dialect: 'postgres',
        dialectOptions: {
          ssl: {
            require: true, // SSLを必須に設定
            rejectUnauthorized: false, // セルフサイン証明書を使用している場合、これをfalseにする必要があります
          },
        },
        logging: false, // ログの表示を無効にする（任意）
      }
) // Example for postgres


const test = async ()=>{

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
test()