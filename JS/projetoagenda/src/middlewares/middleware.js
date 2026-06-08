exports.midddlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.status(403).render('includes/404');
    }
    return next(err);
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.csrfSafeMiddleware = (req, res, next) => {
  try {
    res.locals.csrfToken = req.csrfToken ? req.csrfToken() : '';
  } catch {
    res.locals.csrfToken = '';
  }
  next();
};