exports.profileView = function(req, res, next) {
  res.render('babyProfileView', { title: 'Profile', backbutton: true } );
};

exports.registerView = function(req, res, next) {
  res.render('babyRegisterView', { title: 'Baby Register', backbutton: true });
};
