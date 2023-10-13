// const expect = require('chai').expect;
// const supertest = require('supertest');
// const request = supertest("https://gorest.co.in/public/v2/");

// describe('Api calls',()=>{
//         let token="access-token=7479f4ad271d7704e3a8ba1e0e0603ab502762581eced502b437b45b38ced63f";
//         it ('get request have data in body',(done)=>{
//                 let users="users?";
//                 console.log(`${users}${token}`);
//                 request.get(`${users}${token}`).end((err,res)=>{
//                 expect(res.body).to.not.be.empty;
//                 done();
//                 })
//         })

//         it ('get request have data in body based on ID',async ()=>{
//                 let users="users/5354495?";
//                 console.log(`${users}${token}`);
//                 await request.get(`${users}${token}`).then((res)=>{           
//                 expect(res.body.id).to.be.eq(5354495);
//                 })
//         })

//         it ('get request display data based on filter',async ()=>{
//                 let users="users?page=2&gender=male&status=inactive&";
//                 console.log(`${users}${token}`);
//                 await request.get(`${users}${token}`).then((res)=>{            
//                 expect(res.body).to.not.be.empty;
//                 })
//         })
// })