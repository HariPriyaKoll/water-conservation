'use strict';

class Admin {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    get_circles(id) {
        return this.db.any('SELECT * FROM circle WHERE zone_id = $1', id);
    }

    get_wards(id) {
        return this.db.any('SELECT * FROM ward WHERE circle_id = $1', id);
    }

    
    findById(id) {
        return this.db.one('SELECT * FROM admin WHERE admin_user = $1', id);
    }

    get_zones(){
		return this.db.any('SELECT * FROM zone');
    }

	getUserList(){
		return this.db.any('SELECT * FROM admin');
    }

    get_last_ID(){
        var id = 0;
		return this.db.any('SELECT admin_id FROM admin order by admin_id DESC LIMIT 1');
	}
    
    add_newadmin(req) {
            return this.db.admin.get_last_ID()
                .then( lastRec => {
					var mappedBody = {};
					var keys = Object.keys(req.body);
					keys.forEach(function (item) {
						mappedBody[item] = req.body[item];
                    });
                    mappedBody.admin_id = +lastRec[0].admin_id+ +1;
                   return this.db.one('INSERT INTO admin VALUES(${admin_user},${password},${admin_id}) RETURNING *', mappedBody);
                })
                .catch(error => {
                    return error;
                });
    }

    


    

}

module.exports = Admin;