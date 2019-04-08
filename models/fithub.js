module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    age:{
      type: DataTypes.INTEGER,
      allowNull: false

    } ,
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
  
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    water_glasses: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    exercise_days: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    veggies: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    fruits: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    sleep_hours: {
      type: DataTypes.INTEGER,
      allowNull: false

    },

    gender: {
      type: DataTypes.TEXT
      
    } 
     
  });
  return Profile;
};
