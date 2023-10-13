// const expect = require('chai').expect;
// const supertest = require('supertest');
// const request = supertest("https://gorest.co.in/public/v2/");

// describe('DELETE Api calls',()=>{
//         let token="Bearer 7479f4ad271d7704e3a8ba1e0e0603ab502762581eced502b437b45b38ced63f";
//         it ('delete request to remove user data in body',async ()=>{
//                 let users="users/5354873";
                   
//                 await request.delete(`${users}`).set("Authorization",token).then((res)=>{
//                         console.log(res.body);
//                          expect(res.body.message).to.be.equal("Resource not found");
                        
//                 })
//         })
// })