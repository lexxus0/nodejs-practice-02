export const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
      data: err,
    });
    return;
  }
};
