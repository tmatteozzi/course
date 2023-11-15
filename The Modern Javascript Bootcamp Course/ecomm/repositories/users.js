import crypto from 'crypto';
import util from 'util';
import Repository from './repository.js';

// PROMISIFY HASHING FUNCTION FOR PASSWORD
const scrypt = util.promisify(crypto.scrypt)

class UsersRepository extends Repository {
    async create(attributes){
        // ADD RANDOM ID TO ATTRIBUTES
        attributes.id = this.randomId();
        // GENERATE SALT TO STORE PASSWORD
        const salt = crypto.randomBytes(8).toString('hex');
        // HASHED PASSWORD
        const hashedBuffer = await scrypt(attributes.password, salt, 64);
        // GET ALL CURRENT DATA
        const records = await this.getAll();
        // SAVE FINAL USER OBJECT
        const record = {...attributes, password: `${hashedBuffer.toString('hex')}.${salt}`}
        // PUSH NEW USER ATRIBUTES
        records.push(record);
        // WRITE UPDATED ARRAY
        await this.writeAll(records);
        // RETURN ATTRIBUTES OF THE USER WE CREATED
        return record;
    }

    async comparePasswords(saved, supplied){
        // SAVED -> PASSWORD SAVED IN OUR DB
        const [hashed, salt] = saved.split('.');
        // SUPPLIED -> PASSWORD GIVEN TO US BY A USER TRYING SIGN IN
        const hashedSuppliedBuffer = await scrypt(supplied, salt, 64);
        // COMPARE AND RETURN
        return hashed === hashedSuppliedBuffer.toString('hex');
    }
};

// EXPORT AN INSTANCE TO OTHER FILES
export default new UsersRepository('users.json');