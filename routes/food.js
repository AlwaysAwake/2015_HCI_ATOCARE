exports.view = function(req, res, next) {
  res.render('foodView', { title: 'Food informations', backbutton: true });
};

exports.registerDiaryView = function(req, res, next) {
  res.render('foodRegisterDiaryView', { title: "Register food diary", backbutton: true });
};
