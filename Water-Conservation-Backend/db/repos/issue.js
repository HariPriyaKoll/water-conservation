'use strict';

class Issue {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    getIssueList(){
        return this.db.any('SELECT * FROM issue order by id DESC');
    }


    get_last_Issue_ID(){
		return this.db.any('SELECT id FROM issue order by id DESC LIMIT 1');
    }
    
    add_newissue(req) {
        return this.db.issue.get_last_Issue_ID()
            .then( lastRec => {
                var mappedBody = {};
                var keys = Object.keys(req.body);
                keys.forEach(function (item) {
                    mappedBody[item] = req.body[item];
                });
                mappedBody.id = +lastRec[0].id+ +1;
                return this.db.one('INSERT INTO issue VALUES(${id},${user_name},${issue},${zone_id},${circle_id},${ward_id},${file_upload}) RETURNING *', mappedBody);
            })
            .catch(error => {
                return error;
            });
}

}

module.exports = Issue;