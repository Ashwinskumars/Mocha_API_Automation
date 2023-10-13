// const expect = require('chai').expect;
// const supertest = require('supertest');
// const request = supertest("https://gorest.co.in/public/v2/");

// describe('POST Api calls',()=>{
//         let token="Bearer 7479f4ad271d7704e3a8ba1e0e0603ab502762581eced502b437b45b38ced63f";
//         it ('post request create 2 user data in body',async ()=>{
//                 let users="users";
//                 let data =
                      
//                 {
//                         "name":"shilpy boga",
//                         "email":"shilpy@yahoo.example",
//                         "gender":"female",
//                         "status":"active"
//                 }
      
//                 await request.post(`${users}`).set("Authorization",token).send(data).then((res)=>{
//                         console.log(res.body);
//                          expect(res.body.name).to.be.equal(data.name);
//                          expect(res.body.status).to.be.equal(data.status);
                        
//                 })
//         })
// })