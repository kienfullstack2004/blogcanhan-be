'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostBlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostBlog.init({
    title: DataTypes.STRING,
    des: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
    tag: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostBlog',
  });
  return PostBlog;
};