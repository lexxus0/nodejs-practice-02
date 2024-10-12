export const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(err.status).send({
      status: 500,
      message: err.message,
      data: err,
    });
    return;
  }
};
