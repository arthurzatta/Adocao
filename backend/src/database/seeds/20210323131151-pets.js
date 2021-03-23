module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'pets',
    [
      {
        name: 'Luna',
        image: 'https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'F',
        type: 'cachorro',
        items: ['vacinado', 'vermifugado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luna',
        image: 'https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'F',
        type: 'cachorro',
        items: ['vacinado', 'vermifugado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luna',
        image: 'https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'F',
        type: 'cachorro',
        items: ['vacinado', 'vermifugado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luna',
        image: 'https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'F',
        type: 'cachorro',
        items: ['vacinado', 'vermifugado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Salem',
        image: 'https://i.pinimg.com/736x/c9/80/e7/c980e741cfcbded45bf6a38dc5548835.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'M',
        type: 'gato',
        items: ['vacinado', 'vermifugado', 'chipado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Salem',
        image: 'https://i.pinimg.com/736x/c9/80/e7/c980e741cfcbded45bf6a38dc5548835.jpg',
        id_user: 10,
        description: 'Dori me, Interimo adapare Dori me, Ameno ameno, Latire latiremo, Dori me',
        sex: 'M',
        type: 'gato',
        items: ['vacinado', 'vermifugado', 'chipado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
