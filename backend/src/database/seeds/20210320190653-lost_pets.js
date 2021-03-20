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
    ],
    {},
  ),

  down: () => { },
};
