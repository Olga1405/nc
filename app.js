var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");
app.use(bodyParser.json());

app.use('/clientFormSub', bodyParser.urlencoded({
    extended: true
}));

app.post('/clientFormSub', function(req, res, next) {
    console.dir(req.body);
    smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'olgaivanova1405@gmail.com',
            pass: '************'
        }
    });
    console.log(11111);
    console.log(req.body.email);
    smtpTransport.sendMail({
        from: "Olga <olgaivanova1405@gmail.com>",
        //to: "<iv.olga140595@gmail.com>",
        to: req.body.email,
        subject: "Hotel",
        text: "Вы подписаны на рассылку новостей с сайта hostel.com"
    }, function(error, response){
        if(error){
            console.log('error');
        }else{
            console.log("Message sent: " + response.message);
            res.send(req.body);
        }
        smtpTransport.close();
    });

    return true;
});

app.post('/clientFormSub2', function (req, res) {
    console.log("Your POST request:" + req.body.toString());
    res.send({
        status: "New",
        date: "Сообщение отправлено"
    });
});

app.get('/', function(req,res){
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/home', function(req,res){
    res.sendfile(__dirname + '/public/home.html');
});
app.get('/service', function(req,res){
    res.sendfile(__dirname + '/public/service.html');
});
app.get('/weather', function(req,res){
    res.sendfile(__dirname + '/public/weather.html');
});
app.get('/contact', function(req,res){
    res.sendfile(__dirname + '/public/contact.html');
});
app.get('/about', function(req,res){
    res.sendfile(__dirname + '/public/about.html');
});
app.get('/blocks/clientForm.html', function(req,res){
    res.sendfile(__dirname + '/public/blocks/clientForm.html');
});
app.get('/stylesheets/main.css', function(req,res){
    res.sendfile(__dirname + '/public/stylesheets/main.css');
});
app.get('/stylesheets/jquery.bxslider.css', function(req,res){
    res.sendfile(__dirname + '/public/stylesheets/jquery.bxslider.css');
});
app.get('/font-awesome/css/font-awesome.min.css', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/css/font-awesome.min.css');
});
app.get('/font-awesome/fonts/FontAwesome.otf', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/FontAwesome.otf');
});
app.get('/font-awesome/fonts/fontawesome-webfont.eot', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/fontawesome-webfont.eot');
});
app.get('/font-awesome/fonts/fontawesome-webfont.svg', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/fontawesome-webfont.svg');
});
app.get('/font-awesome/fonts/fontawesome-webfont.ttf', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/fontawesome-webfont.ttf');
});
app.get('/font-awesome/fonts/fontawesome-webfont.woff', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/fontawesome-webfont.woff');
});
app.get('/font-awesome/fonts/fontawesome-webfont.woff2', function(req,res){
    res.sendfile(__dirname + '/public/font-awesome/fonts/fontawesome-webfont.woff2');
});
app.get('/javascripts/main.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/main.js');
});
app.get('/javascripts/jquery.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.js');
});
app.get('/javascripts/jquery.min.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.min.js');
});
app.get('/javascripts/forall.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/forall.js');
});
app.get('/javascripts/jquery.bxslider.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.bxslider.js');
});
app.get('/javascripts/jquery.easing.1.3.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.easing.1.3.js');
});
app.get('/javascripts/jquery.cookie.min.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.cookie.min.js');
});
app.get('/javascripts/jquery.fitvids.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.fitvids.js');
});
app.get('/javascripts/forLoad.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/forLoad.js');
});
app.get('/javascripts/jquery.maskedinput.min.js', function(req,res){
    res.sendfile(__dirname + '/public/javascripts/jquery.maskedinput.min.js');
});
app.get('/images/banner1.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/banner1.jpg');
});
app.get('/images/hi.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/hi.jpg');
});
app.get('/images/banner2.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/banner2.jpg');
});
app.get('/images/bed1.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/bed1.jpg');
});
app.get('/images/bed2.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/bed2.jpg');
});
app.get('/images/bed3.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/bed3.jpg');
});
app.get('/images/banner3.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/banner3.jpg');
});
app.get('/images/ajax-loader.gif', function(req,res){
    res.sendfile(__dirname + '/public/images/ajax-loader.gif');
});
app.get('/images/big.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/big.jpg');
});
app.get('/images/face.png', function(req,res){
    res.sendfile(__dirname + '/public/images/face.png');
});
app.get('/images/face-2.png', function(req,res){
    res.sendfile(__dirname + '/public/images/face-2.png');
});
app.get('/images/face-3.png', function(req,res){
    res.sendfile(__dirname + '/public/images/face-3.png');
});
app.get('/images/fon.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/fon.jpg');
});
app.get('/images/fonOne.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/fonOne.jpg');
});
app.get('/images/fon-blog.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/fon-blog.jpg');
});
app.get('/images/bx-controls.png', function(req,res){
    res.sendfile(__dirname + '/public/images/bx-controls.png');
});
app.get('/images/bx_loader.gif', function(req,res){
    res.sendfile(__dirname + '/public/images/bx_loader.gif');
});
app.get('/font/Ubuntu.woff', function(req,res){
    res.sendfile(__dirname + '/public/images/font/Ubuntu.woff');
});
app.get('/font/Ubuntu.ttf', function(req,res){
    res.sendfile(__dirname + '/public/font/Ubuntu.ttf');
});
app.get('/font/Ubuntu.woff2', function(req,res){
    res.sendfile(__dirname + '/public/font/Ubuntu.woff2');
});
app.get('/arcticmodal/jquery.arcticmodal.css', function(req,res){
    res.sendfile(__dirname + '/public/arcticmodal/jquery.arcticmodal.css');
});
app.get('/arcticmodal/jquery.arcticmodal.js', function(req,res){
    res.sendfile(__dirname + '/public/arcticmodal/jquery.arcticmodal.js');
});
app.get('/arcticmodal/themes/simple.css', function(req,res){
    res.sendfile(__dirname + '/public/arcticmodal/themes/simple.css');
});
app.get('/images/view1.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view1.jpg');
});
app.get('/images/view2.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view2.jpg');
});
app.get('/images/view3.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view3.jpg');
});
app.get('/images/view4.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view4.jpg');
});
app.get('/images/view5.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view5.jpg');
});
app.get('/images/view6.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view6.jpg');
});
app.get('/images/view7.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view7.jpg');
});
app.get('/images/view8.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view8.jpg');
});
app.get('/images/view9.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view9.jpg');
});
app.get('/images/view10.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view10.jpg');
});
app.get('/images/view11.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view11.jpg');
});
app.get('/images/view12.jpg', function(req,res){
    res.sendfile(__dirname + '/public/images/view12.jpg');
});

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
module.exports = app;



