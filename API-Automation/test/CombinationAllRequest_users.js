require('dotenv').config();
const expect = require('chai').expect;
const supertest = require('supertest');
const req = require('../Config/dataReader.js').url;
const request = supertest(req);
const { faker } = require('@faker-js/faker');
const token =process.env.USER_TOKEN;

describe('All request call',()=>{
        let userID;
        let userName;
describe('POST Api calls',()=>{
        console.log(token);
        it ('post request create  user data in body',async ()=>{

                
                let users="users";
                let data =
                      
                {
                        "name":faker.internet.userName(),
                        "email":faker.internet.email(),
                        "gender":"female",
                        "status":"active"
                }
      
                await request.post(`${users}`).set("Authorization",`Bearer `+token).send(data).then((res)=>{
                        console.log(res.body);
                         expect(res.body.name).to.be.equal(data.name);
                         expect(res.body.status).to.be.equal(data.status);
                         userID=res.body.id;
                         userName=res.body.name;
                })
        })
})

describe('Get Api calls',()=>{
        
                it ('get request have data in body based on ID',async ()=>{
                        let users=`users/${userID}`;
                        await request.get(`${users}`).set("Authorization",`Bearer `+token).then((res)=>{           
                        expect(res.body.name).to.be.eq(userName);
                        })
                })
})

describe('PUT Api calls',()=>{
                it ('put request to update user data in body',async ()=>{
                        let users=`users/${userID}`;
                        let data =
                              
                        {
                                "name":"shilpy hoga",
                                "email":"shilpyhoga@yahoo.example",
                                "gender":"female",
                                "status":"active"
                        }
              
                        await request.put(`${users}`).set("Authorization",`Bearer `+token).send(data).then((res)=>{
                                console.log(res.body);
                                 expect(res.body.name).to.be.equal(data.name);
                                 expect(res.body.email).to.be.equal(data.email);
                                
                        })
                })
        })

        describe('DELETE Api calls',()=>{
                it('delete request to remove user data in body',async ()=>{
                        let users=`users/${userID}`;
                           
                        await request.delete(`${users}`).set("Authorization",`Bearer `+token).then((res)=>{
                                console.log(res.body);
                                 expect(res.body).to.be.empty;
                                
                        })
                })
        })

})