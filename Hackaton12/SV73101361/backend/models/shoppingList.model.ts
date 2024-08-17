import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface ShoppingListAttributes {
    id?: number;
    Nombre: string;
    Descripcion?: string;
    Fecha?: Date;
    EsCompletado?: boolean;
}

type ShoppingListCreationAttributes = Optional<ShoppingListAttributes, 'id'>;

class ShoppingList extends Model<ShoppingListAttributes, ShoppingListCreationAttributes>
    implements ShoppingListAttributes {
    public id!: number;
    public Nombre!: string;
    public Descripcion!: string;
    public Fecha!: Date;
    public EsCompletado!: boolean;
}

export default (sequelize: Sequelize) => {
    ShoppingList.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.TEXT
        },
        Fecha: {
            type: DataTypes.DATE
        },
        EsCompletado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'shopping_list',
        sequelize,
        timestamps: false
    });

    return ShoppingList;
};
