import fs from 'fs';  
import path from 'path';  
class LoginController {  
    static Login(req, res) {  
        res.render('Login', { title: 'Login' });  
    }  
    static handleLogin(req, res) {  
        const { username, password } = req.body;  
        const userDataPath = path.resolve('C:/Users/T U F/Desktop/bt_nodejs/bt2/controllers/login/user.txt');  

        fs.readFile(userDataPath, 'utf-8', (err, data) => {  
            if (err) return res.status(500).send('Error reading user data.');  

            const users = new Map(data.split('\n').map(line => line.split(':').map(item => item.trim())));  
            if (users.has(username) && users.get(username) === password) {  
                res.send(`  
                    <h1>Welcome!</h1>  
                    <p>Username: ${username}</p>  
                    <p>Password: ${password}</p>  
                `);  
            } else {  
                res.send(`<script>alert('Sai mật khẩu hoặc tên đăng nhập!'); window.location.href = '/Login';</script>`);  
            }  
        });  
    }  
}  

export default LoginController;