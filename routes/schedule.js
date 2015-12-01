exports.view = function(req, res, next) {
  res.render('scheduleView', { title: 'Schedule', backbutton: true } );
};
