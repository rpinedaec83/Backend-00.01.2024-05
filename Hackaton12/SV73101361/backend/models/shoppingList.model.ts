// models/shoppingList.model.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.config';

interface ShoppingListAttributes {
  id?: number;
  nombre: string;
  descripcion?: string;
  fecha?: Date;
  es_completado?: boolean;
}

type ShoppingListCreationAttributes = Optional<ShoppingListAttributes, 'id' | 'es_completado'>;

class ShoppingList extends Model<ShoppingListAttributes, ShoppingListCreationAttributes>
  implements ShoppingListAttributes {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public fecha!: Date;
  public es_completado!: boolean;
}

ShoppingList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    es_completado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'items',
    timestamps: false,
    sequelize,
  }
);

export default ShoppingList;
