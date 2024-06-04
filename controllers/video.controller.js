import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";

const uploadVideo = asyncHandler(async (req, res) => {
  //algo getting data
  const { title, description } = req.body;
  //validation
  if ([title, description].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Please provide all fields");
  }
  //check video
  const localVideoFile = req.files?.videoFile[0]?.path;
  if (!localVideoFile) {
    return res.status(400).json({
      status: "error",
      message: "Please provide video",
    });
  }

  const localThumbnail = req.files?.thumbnail[0]?.path;
  if (!localThumbnail) {
    throw new ApiError(400, "Thumbnail is required");
  }

  //upload on cloudinary
  //create video obj
  //send res
});

const deleteVideo = asyncHandler(async (req, res) => {
  //
});

const getAllVideos = asyncHandler(async (req, res) => {
  //algo
});

const getSingleVideo = asyncHandler(async (req, res) => {
  //
});

const watchHistory = asyncHandler(async (req, res) => {
  //
});

export { uploadVideo, deleteVideo, getAllVideos, getSingleVideo, watchHistory };
