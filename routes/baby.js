exports.profileView = function(req, res, next) {
  res.render('babyProfileView', { title: 'Profile', backbutton: true } );
};
