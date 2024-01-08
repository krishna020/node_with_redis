const redis=require('./client')

async  function  string_operation()
{ 
                  //await redis.expire('user:2',10) , if you want to delete document after some time then
     //await redis.set('name','rahul sahu') // want to change name
     const result01=await redis.get('name') // want to get name value
     const result02= await redis.get('user:1') // want to get user:1 value
     console.log(result01,","+result02);
}

string_operation();