import fs from 'fs';
import crypto from 'crypto';

export default class Repository {
    constructor(filename){
        if(!filename){
            throw new Error('Creating a repository requires a filename.');
        }
        this.filename = filename;
        try{
            fs.accessSync(this.filename);
        } catch (err){
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async create(attributes){
        // ADD RANDOM ID TO ATTRIBUTES
        attributes.id = this.randomId();
        // GET ALL CURRENT DATA
        const records = await this.getAll();
        // PUSH NEW USER ATTRIBUTES
        records.push(attributes);
        // WRITE UPDATED ARRAY
        await this.writeAll(records);
        // RETURN ATTRIBUTES OF THE USER WE CREATED
        return attributes;
    }

    async delete(id){
        // GET A LIST OF ALL OF THE RECORDS
        const records = await this.getAll();
        const filteredRecords = records.filter(record => record.id !== id);
        // WRITE UPDATED ARRAY
        await this.writeAll(filteredRecords);
    }
    
    async update(id, attributes){
        // GET A LIST OF ALL OF THE RECORDS
        const records = await this.getAll();
        // GET THE RECORD WE CARE ABOUT
        const record = records.find(record => record.id === id);
        // NO RECORD FOUND EXCEPTION
        if(!record){
            throw new Error(`Record with id ${id} not found`);
        }
        // UPDATE RECORD IF FOUND
        Object.assign(record, attributes);
        // WRITE UPDATED ARRAY
        await this.writeAll(records);
    }

    async getAll(){
        // OPEN, READ FILE, PARSE AND RETURN
        return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8'}));
    }

    async writeAll(records){
        // WRITE UPDATED ARRAY TO this.filename
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    async getOne(id){
        // GET A LIST OF ALL OF THE RECORDS
        const records = await this.getAll();
        return records.find(record => record.id === id);
    }

    async getOneBy(filters){
        // GET A LIST OF ALL OF THE RECORDS
        const records = await this.getAll();
        for(let record of records){
            let found = true;
            for(let key in filters){
                if(record[key] !== filters[key]){
                    found = false;
                }
            }
            if(found){
                return record;
            }
        }
    }

    randomId(){
        return crypto.randomBytes(4).toString('hex');
    }
};