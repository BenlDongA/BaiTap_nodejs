
class HomeController{
    static Home(req, res)  {
        console.log(req.query)
        res.render("Home", { title: "Home Page"});
      }
    
}
export default HomeController