const { users_model } = require("../models");
const { sequelize } = require("../models");

exports.Save = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  if (req.body.full_name === "") {
    return res.status(200).json({
      success: false,
      message: "Please enter your full name!",
    });
  } else if (req.body.mobile_number === "") {
    return res.status(200).json({
      success: false,
      message: "Please enter mobile number!",
    });
  } else if (req.body.pin_number === "") {
    return res.status(200).json({
      success: false,
      message: "Please enter pin number!",
    });
  } else {
    let userDetails = await users_model
      .findOne({ where: { mobile_number: "88" + req.body.mobile_number } })
      .catch(errorHandler);
    if (userDetails === null) {
      let insert_data = req.body;
      insert_data.mobile_number = "88" + req.body.mobile_number;
      const userInsertDetails = await users_model
        .create(insert_data)
        .catch(errorHandler);
      return res.status(200).json({
        success: true,
        result: userInsertDetails,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Mobile number already register!",
      });
    }
  }
};

exports.Login = async (req, res, next) => {
  const errorHandler = (err) => {
    return res.status(500).json({
      success: false,
      error: err,
    });
  };

  if (req.body.mobile_number == "") {
    return res
      .status(200)
      .json({ success: false, message: "Please enter your mobile number!" });
  } else {
    let user = await users_model
      .findOne({
        where: { mobile_number: req.body.mobile_number },
      })
      .catch((error) => errorHandler(error));
    if (user === null) {
      return res.status(200).json({
        success: false,
        message: "Your mobile number not found.",
      });
    } else {
      return res.status(200).json({
        success: true,
        result: user,
      });
    }
  }
};
