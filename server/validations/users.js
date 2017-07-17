/*eslint-disable */
export default{
  createValidation(res, req) {
    if (!req.body.username || req.body.username == null) {
      return res.status(400).send({
        message: 'Please enter a valid username'
      });
    }
  }
};
