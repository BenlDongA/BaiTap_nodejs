import Service from '../models/serviceModel.js';

class ServiceController {
    static async getAllServices(req, res) {
        try {
            const services = await Service.find();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ServiceController;
