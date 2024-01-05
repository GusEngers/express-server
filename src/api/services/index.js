module.exports = {
  homeService: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('pong');
      }, 2000);
    });
  },
};
