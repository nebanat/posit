import models from '../models';

export default {
  userEmailExist(email) {
    return models.User
      .findOne({
        where: { email }
      });
  }
};
