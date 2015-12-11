exports.view = function(req, res, next) {
  res.render('environmentView', { title: 'Environment', backbutton: true, plusbutton: true } );
};
