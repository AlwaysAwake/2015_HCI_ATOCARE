exports.view = function(req, res, next) {
  res.render('statistics', { title: 'Statistics', backbutton: true } );
};
