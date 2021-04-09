module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'lost_pets',
    [
      {
        name: 'Daisy',
        image: 'https://i.pinimg.com/originals/1a/b1/e6/1ab1e6c9e788d575177d3303bb622e93.jpg',
        id_user: 9,
        description: 'Se alguém tiver sequestrado minha cachorrinha...',
        latitude: '-19.483520',
        longitude: '-42.515890',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fagner',
        image: '/home/arthur/Adocao/backend/tmp/uploads/fagner.jpeg',
        id_user: 4,
        description: 'Quem dera ser um peixe, para em seu lindo aquário mergulhar....',
        latitude: '-19.483520',
        longitude: '-42.515890',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Estrela',
        image: 'https://www.portaldodog.com.br/cachorros/wp-content/uploads/2018/01/cadelinha-fica-muito-feliz-sempre-que-e-levada-ao-supermercado-pdd4.jpg',
        id_user: 9,
        description: 'Muito alegre e mancinha',
        latitude: '-19.483520',
        longitude: '-42.515890',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
