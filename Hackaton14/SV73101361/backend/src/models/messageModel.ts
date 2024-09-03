import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';

interface MessageAttributes {
  id: number;
  content: string;
  sender: string;
  timestamp: Date;
}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id' | 'timestamp'> {}

class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
  public id!: number;
  public content!: string;
  public sender!: string;
  public timestamp!: Date;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'messages',
  }
);

export default Message;
