exports.view = function(req, res, next) {
  res.render('environmentView', { title: 'Statistics', backbutton: true, plusbutton: true } );
};
