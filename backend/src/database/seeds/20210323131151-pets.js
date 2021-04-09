module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'pets',
    [
      {
        name: 'Luna',
        image: 'https://tudovet.com.br/blog/wp-content/uploads/2018/11/expectativa-de-vida-cachorro-845x423.jpg',
        id_user: 7,
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
        id_user: 9,
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
        name: 'Porco-Aranha',
        image: 'http://pm1.narvii.com/6465/0fab47b164f924a36acca6e45b5d0bacbd3ef998_hq.jpg',
        id_user: 1,
        description: 'Porco-aranha, porco-aranha, pouco porco e mais aranha...',
        sex: 'M',
        type: 'outros',
        items: ['vacinado', 'vermifugado', 'chipado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Loro José',
        image: 'http://s2.glbimg.com/bcMLrkFsNfZn_ySj2P1IZCwjSLQ=/s.glbimg.com/et/pr/f/original/2014/03/05/louro.jpg',
        id_user: 5,
        description: 'Adeus Ana Maria...',
        sex: 'M',
        type: 'outros',
        items: ['chipado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Toto',
        image: 'https://cdn.vidanimal.com.br/wp-content/uploads/filhote-de-cachorro-a-venda6.jpg',
        id_user: 5,
        description: 'Pego bolinha, corro pra caramba, energia e alto astral',
        sex: 'M',
        type: 'outros',
        items: ['chipado'],
        latitude: '-19.444289',
        longitude: '-42.560084',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Caju',
        image: 'backend/tmp/uploads/fa6c2e5b7e2a81e1eb4b7b89b4884552.jpg',
        id_user: 4,
        description: 'Morena tropicana...',
        sex: 'F',
        type: 'outros',
        items: ['chipado'],
        latitude: '-19.483520',
        longitude: '-42.515890',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jiló',
        image: '',
        id_user: 7,
        description: 'Amargo',
        sex: 'M',
        type: 'cachorro',
        items: ['vacinado'],
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
