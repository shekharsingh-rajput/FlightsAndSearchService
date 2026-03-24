const { Op } = require('sequelize') 

const { City } = require("../models/index");

class CityRepository {
  async createCity(data) {
    try {
      const city = await City.create(data);
      return city;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
        await City.destroy({
            where:{
                id: cityId
            }
        });
        return true;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) { 
    try {
        const city = await City.update(data,{
            where:{
                id : cityId
            }
        });
        return city;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }

  async getAllCities(filter){ // filter can be empty also
    try {
        if (filter.name){
          const cities = await City.findAll({
            where: {
              name : {
                [Op.startsWith]: filter.name
              }
            }
          })
          return cities;
        }
        const cities = await City.findAll();
        return cities;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
