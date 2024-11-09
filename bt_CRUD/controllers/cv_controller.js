import User from "../models/user.js";
class CvController {
   static async detail (req, res)  {
    let data = await User.find({ $or: [{ age: 20 }, { age: 30 }] });
    let user = data[0]
    // let workExperience = user.workExperience
    console.log(data);
    res.send(data)
        // res.render("cv", { title: "Home Page", workExperience });
      }
}
export default CvController