const { City } = require("../models/city");

class CityRepository {
  async CreateCity(name) {
    try {
      const city = await City.create({
        name
      });
      return city;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }

  async DeleteCity(cityId) {
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

  async UpdateCity(cityId, data) { 
    try {
        const city = await City.Update(data,{
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

  async GetCity(cityId) {
    try {
        const city = await City.findByPK(cityId);
        return city;
    } catch (error) {
      console.log("something goes wrongi in repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
