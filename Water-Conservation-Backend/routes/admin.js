var admin = require('./admin');
var express = require('express');
var router = express.Router();
const db = require('../db');

GET('/getUserList', () => db.admin.getUserList());

router.post('/add_new_admin', (req, res, next) => {
        db.admin.add_newadmin(req)
            .then(user => {
				console.log("lastRec",user);
				if(user){
					res.status(200).json({
						success: true,
						status: 'Added Successfully',
					});
				}
                
            })
            .catch((err) => {
                console.log(" err:", err);
                res.status(400).json({
                    success: false,
                    status: 'Bad request, unable to add new admin user'
                });
            });
});

//get All zones
GET('/get_zones', () => db.admin.get_zones());

//get Circles
router.post('/get_circles', (req, res, next) => {
    db.admin.get_circles(req.body.zone_id)
        .then(data => {
            if(data){
                res.status(200).json({
                    success: true,
                    status: data,
                });
            }
            
        })
        .catch((err) => {
            console.log(" err:", err);
            res.status(400).json({
                success: false,
                status: 'Bad request'
            });
        });
});

//get Wards
router.post('/get_wards', (req, res, next) => {
    db.admin.get_wards(req.body.circle_id)
        .then(data => {
            if(data){
                res.status(200).json({
                    success: true,
                    status: data,
                });
            }
            
        })
        .catch((err) => {
            console.log(" err:", err);
            res.status(400).json({
                success: false,
                status: 'Bad request'
            });
        });
});


//Admin Login
router.post('/login', function (req, res) {
    db.admin.findById(req.body.admin_user)
        .then(user => {
            if (!user) {
                res.status(400).json({
                    success: false,
                    status: 'Authentication failed, User not found'
                });
			}
             else if (user.password != req.body.password) {
                res.status(403).json({
                    success: false,
                    status: 'Authentication failed, Wrong password'
                });
                return
            }
			if(user){
					res.status(200).json({
						success: true,
						status: 'logged in successfully',
						username: user.admin_user
					});
			}
        })
        .catch(error => {
            res.status(400).json({
                success: false,
                status: 'Bad request, Not able to identify user'
            });
        });
});




// Generic GET handler;
function GET(url, handler) {
    router.get(url, (req, res) => {
        handler(req)
            .then(data => {
				console.log(data);
                res.status(200).json({
                    success: true,
                    data
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}



module.exports = router;