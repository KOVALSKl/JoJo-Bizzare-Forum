const sequelize = require("../db")
const { DataTypes } = require("sequelize");

const User = sequelize.define('user', {
    nickname: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    }

});

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    }
})

const Stand = sequelize.define('stand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING
})

const Character = sequelize.define('character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING
})

const SingleNews = sequelize.define('news', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: DataTypes.STRING
})

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

const Discussion = sequelize.define('discussion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

User.hasMany(SingleNews);
SingleNews.belongsTo(User);

Character.hasMany(User);
User.belongsTo(Character);

Stand.hasMany(User);
User.belongsTo(Stand);

User.hasMany(Discussion);
Discussion.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

Discussion.hasMany(Comment);
Comment.belongsTo(Discussion);

module.exports = {
    User,
    Role,
    Stand,
    Character,
    SingleNews,
    Comment,
    Discussion
}