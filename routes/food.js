exports.view = function(req, res, next) {
  res.render('foodView', {
    title: 'Food informations',
    backbutton: true,
    foods: [
      {
        name: 'Pork',
        effect: 'very cautious',
        danger: 'bad'
      },
      {
        name: 'Flour',
        effect: 'cookie->bad',
        danger: 'high'
      },
      {
        name: 'Bread',
        effect: 'organic',
        danger: 'medium'
      },
      {
        name: 'Rice',
        effect: 'good',
        danger: 'good'
      },
      {
        name: 'Honey',
        effect: 'healthy',
        danger: 'good'
      },
      {
        name: 'Cookie',
        effect: 'danger->sugar',
        danger: 'bad'
      },
      {
        name: 'Egg',
        effect: 'ingredient',
        danger: 'bad'
      },
      {
        name: 'Apple',
        effect: 'fruits',
        danger: 'good'
      },
      {
        name: 'Bean',
        effect: 'big bean',
        danger: 'bad'
      },
      {
        name: 'Fish',
        effect: 'salmon->ok',
        danger: 'bad'
      }
    ]
  });
};

exports.registerDiaryView = function(req, res, next) {
  res.render('foodRegisterDiaryView', { title: "Register food diary", backbutton: true });
};
