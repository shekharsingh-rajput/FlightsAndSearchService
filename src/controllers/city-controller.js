const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        console.log('req.body:', req.body);
        const data = {
            name: req.body.name || req.body['name\n'] || req.body['name\r\n']
        };
        if (!data.name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required',
                err: {}
            });
        }
        const city = await cityService.createCity(data);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'successfully created a city',
            err: {}
        })    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        })
    }
}
const destroy = async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully deleted the city',
            err: {}
        })  
    } catch (error) { 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the city',
            err: error
        })
    }
} 
// GET -> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully fetched the city',
            err: {}
        })  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to fetch the city',
            err: error
        })
    }
} 
//patch -> /city/:id -> req.body
const update = async (req,res) => {
    try {
        const data = {
            name: req.body.name || req.body['name\n'] || req.body['name\r\n']
        };
        if (!data.name) {
            return res.status(400).json({
                success: false,
                message: 'Name is required',
                err: {}
            });
        }
        const response = await cityService.updateCity(req.params.id, data);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'successfully updated the city',
            err: {}
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update the city',
            err: error
        })
    }
} 


module.exports = {
    create,
    destroy,
    get,
    update
}