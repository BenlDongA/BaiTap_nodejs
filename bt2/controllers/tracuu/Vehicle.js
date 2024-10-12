import fs from 'fs/promises';  
import path from 'path';  

class VehicleController {  
    static async Vehicle(req, res) {  
        const filePath = path.resolve('C:/Users/T U F/Desktop/bt_nodejs/bt2/controllers/tracuu/vietnameseVehiclePlates.txt');  
        try {
            const data = await fs.readFile(filePath, 'utf-8');  
            const cities = JSON.parse(data);  
            let plates = ''; 
            if (req.query.city) {
                const city = cities.find(c => c.city === req.query.city);
                plates = city ? city.plate_no : ''; 
            }
            res.render("Vehiclefrom", { title: "Vehicle Page", cities, plates, selectedCity: req.query.city });  
        } catch (error) {
            console.error("Error reading vehicle data:", error);
            res.status(500).send('Error reading vehicle data.');  
        }
    }  
}

export default VehicleController;
