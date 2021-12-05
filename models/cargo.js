'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cargo.init({
    cod_cargo: DataTypes.INTEGER,
    salario: DataTypes.INTEGER,
    cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cargo',
  });
  return cargo;
};