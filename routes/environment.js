exports.view = function(req, res, next) {
  res.render('environment', { title: 'Statistics', backbutton: true, plusbutton: true } );
};
