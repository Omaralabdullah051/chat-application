function decorateHtmlResponse(page_Title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${page_Title} -${process.env.APP_NAME}`;
    next();
  };
}

module.exports = decorateHtmlResponse;
