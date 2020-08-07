module.exports = function(sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 200]
            },
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Todo;
}