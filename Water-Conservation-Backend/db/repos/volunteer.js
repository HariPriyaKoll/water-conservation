'use strict';

class Volunteer {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }
	
	//get user List
	getVolunterList(){
        console.log(this.db);
		return this.db.any('SELECT * FROM volunteer');
    }

    get_last_volunteerID(){
		return this.db.any('SELECT id FROM volunteer order by id DESC LIMIT 1');
    }
    
    add_newvolunteer(req) {
        return this.db.volunteer.get_last_volunteerID()
            .then( lastRec => {
                var mappedBody = {};
                mappedBody.first_name = req.body.first_name;
                mappedBody.last_name = req.body.last_name;
                mappedBody.mobile_number = req.body.mobile_number;
                mappedBody.gender = req.body.gender;
                mappedBody.email_id = req.body.email_id;
                mappedBody.address = req.body.address;
                mappedBody.occupation = req.body.occupation;
                mappedBody.organization = req.body.organization;
                mappedBody.v_hour_per_week = req.body.v_hour_per_week;
                mappedBody.preferred_days = req.body.preferred_days;
                mappedBody.zone = req.body.zone;
                mappedBody.circle = req.body.circle;
                mappedBody.ward = req.body.ward;
                mappedBody.area_of_interest = req.body.area_of_interest;
                mappedBody.id = +lastRec[0].id+ +1;
               return this.db.one('INSERT INTO volunteer VALUES(${first_name},${last_name},${mobile_number},${gender},${email_id},${address},${occupation},${organization},${v_hour_per_week},${preferred_days},${zone},${circle},${ward},${area_of_interest},${id}) RETURNING *', mappedBody);
                
            })
            .catch(error => {
                return error;
            });
    }

}

module.exports = Volunteer;