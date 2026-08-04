exports.midddlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.status(403).render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

// exports.csrfSafeMiddleware = (req, res, next) => {
//   try {
//     res.locals.csrfToken = req.csrfToken ? req.csrfToken() : '';
//   } catch {
//     res.locals.csrfToken = '';
//   }
//   next();
// };