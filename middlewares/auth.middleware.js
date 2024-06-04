import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    // console.log(req.cookies);
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    // console.log("TOKEN: ", token);
    if (!token) {
      return new ApiError(401, "Unauthorized request");
    }
    const decodedTooken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("DECODED TOKEN", decodedTooken);
    const user = await User.findById(decodedTooken?._id).select(
      "-password -refreshToken"
    );
    // console.log("USER:", user);
    if (!user) {
      return new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    return new ApiError(401, error?.message || "Invalid Token");
  }
});
