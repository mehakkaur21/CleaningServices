exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login | OneStepAwayCleaner',
    })
}
exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'Signup | OneStepAwayCleaner',
    })
}
exports.postSignup=(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const confirmPassword = req.body.confirmPassword;


                    // Date and time 
                    const date2 = new Date();
                    var dateNow = `${date2.getDate()} ${date2.toLocaleString('default', { month: 'short' })} ${date2.getFullYear()}`;
                    var date = new Date();
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var ampm = hours >= 12 ? 'pm' : 'am';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    var strTime = hours + ':' + minutes + ' ' + ampm;
                    var time = strTime;

                    const user = new User({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: hashedPassword,
                        userType: 'user',
                        dateCreated: dateNow,
                        timeCreated: time,
                    })
                    user.save();
}
exports.postLogin = (req, res, next) => {
    console.log('Login Form Submitted');
    const email = req.body.email;
    const password = req.body.password;
    if (email === 'sheldon@gmail.com' && password === 'dd') {
        console.log('Correct');
        console.log('Vaild Password');
        req.session.isLoggedIn = true;
        req.session.save();
        res.redirect('/dashboard');
    } else {
        console.log('WRONG');
        res.redirect('/login');
    }
}

exports.postLogout=(req,res,next)=>{
    req.session.destroy(err => {
        console.log(err);
        return res.redirect('/');
    })
}