//model des taches 
import { DataTypes } from "sequelize";
import { sequelize } from '../db.js';

export const Tasks = sequelize.define("tasks", {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complete: {
        type: DataTypes.BOOLEAN,
    },
    //add owner to task qui fait référence
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        ref: {
            model: 'User',
            key: 'id'
        }
    }
},
{
    createdAt: false,
    updatedAt: false
}
);
