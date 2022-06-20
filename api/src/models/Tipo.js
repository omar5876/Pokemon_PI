const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tipo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    })
}