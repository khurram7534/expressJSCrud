/**
 * Created by mkhur on 1/27/2020.
 */

/**
 * Created by mkhur on 1/22/2020.
 */



class dbQuery {

    index(con, table , callback) {
        con.query(`SELECT * FROM ${table}`, callback);
    }

    store(con, data,table, callback) {
        let email = data.email;
        let user = {  email: email, };
        con.query(`INSERT INTO ${table} SET ?`, user, callback);
    }

    edit(con, id,table, callback) {
        con.query(`SELECT * FROM ${table} WHERE id = ${id}`, callback)
    }

    update(con, data,table, callback) {
        con.query(
            `UPDATE ${table} SET 
              email = '${data.email}' 
              WHERE id = ${data.id}`,
            callback
        )
    }

    destroy(con, id,table, callback) {
        con.query(`DELETE FROM ${table} WHERE id = ${id}`, callback)
    }

}

let obj = new dbQuery();
module.exports = obj;