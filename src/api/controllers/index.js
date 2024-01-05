const { homeService } = require('../services');

module.exports = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  homeController: async (req, res, next) => {
    try {
      const pong = await homeService();
      res.json({ ping: pong });
    } catch (error) {
      next(error);
    }
  },
};
