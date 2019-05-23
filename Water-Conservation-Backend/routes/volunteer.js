var config = require('config');
var volunteer = require('./volunteer');
var express = require('express');
var router = express.Router();
const db = require('../db');



//get userList
 GET('/getVolunterList', () => db.volunteer.getVolunterList());




 router.post('/add_new_volunteer', (req, res, next) => {
    return db.volunteer.add_newvolunteer(req)
        .then(data => {
            if(data){
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