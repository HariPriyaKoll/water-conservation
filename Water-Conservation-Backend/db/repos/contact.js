'use strict';

class Contact {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }
	
	getContactUsList(){
		return this.db.any('SELECT * FROM contact');
    }

    get_last_contactID(){
		return this.db.any('SELECT id FROM contact order by id DESC LIMIT 1');
    }
    
    add_newcontact(req) {
        return this.db.contact.get_last_contactID()
            .then( lastRec => {
                var mappedBody = {};
                var keys = Object.keys(req.body);
                keys.forEach(function (item) {
                    mappedBody[item] = req.body[item];
                });
                mappedBody.id = +lastRec[0].id+ +1;
                return this.db.one('INSERT INTO contact VALUES(${username},${mobile_number},${email_id},${message},${id}) RETURNING *', mappedBody);
            })
            .catch(error => {
                return error;
            });
    }
       

}

module.exports = Contact;