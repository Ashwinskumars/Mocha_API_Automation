// const expect = require('chai').expect;
// const supertest = require('supertest');
// const request = supertest("https://gorest.co.in/public/v2/");

// describe('PUT Api calls',()=>{
//         let token="Bearer 7479f4ad271d7704e3a8ba1e0e0603ab502762581eced502b437b45b38ced63f";
//         it ('put request to update user data in body',async ()=>{
//                 let users="users/5354873";
//                 let data =
                      
//                 {
//                         "name":"shilpy hoga",
//                         "email":"shilpyhoga@yahoo.example",
//                         "gender":"female",
//                         "status":"active"
//                 }
      
//                 await request.put(`${users}`).set("Authorization",token).send(data).then((res)=>{
//                         console.log(res.body);
//                          expect(res.body.name).to.be.equal(data.name);
//                          expect(res.body.email).to.be.equal(data.email);
                        
//                 })
//         })
// })