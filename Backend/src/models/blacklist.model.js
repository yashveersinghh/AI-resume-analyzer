const momgoose = require("mongoose");
const { applyTimestamps } = require("./user.model");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to be added in blacklist"],
    },
  },
  {
    timestamps: true,
  },
);

const tokenBlacklistModel = mongoose.Model("blaclistToken", blacklistTokenSchema);

module.exports = tokenBlacklistModel;