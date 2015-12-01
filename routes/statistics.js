exports.view = function(req, res, next) {
  res.render('statisticsView', { title: 'Statistics', backbutton: true } );
};
