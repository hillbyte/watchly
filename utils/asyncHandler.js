// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(error.code || 500)
//       .json({ success: false, message: error.message });
//   }
// };

const asyncHandler = (requesthanler) => {
  return (req, res, next) => {
    Promise.resolve(requesthanler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };
