exports.view = function(req, res, next) {
  res.render('foodView', { title: 'Food informations', backbutton: true });
};
