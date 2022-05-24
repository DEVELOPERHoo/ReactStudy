const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require("./config/key");
const { User } = require("./models/User");

// 클라이언트에서 오는 정보를 서버에서 분석해서 가져올수 있게 해줌
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))
app.get('/', (req, res) => res.send("Hello, world!~~~~"));


app.post('/register', (req, res) => {
    // 회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 붙여준다.
    
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))