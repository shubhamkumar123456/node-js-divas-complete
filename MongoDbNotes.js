// CRUD  --> create , read, update ,delete

//1)   create a new Data base or use any existing Database  -->use DatabaseName

//2) create a collection insideDatabase  -->
        // db.createCollection('movies')

//3)insert Data inside Collection -->
    // a) insert single Data  --> db.collectionName.insertOne({name:"", email:""})
    // b) insert Multiple Data --> db.collectionName.insertMany([{}, {}])

//4)Get or Read Data in a collection  -->
//  a)Get All Data -->
//  db.collectionName.find()  --> will give you all the data present in side this collection

// b) get any single Data  --> db.collectionName.findOne({key:value})


//5) Update Data  -->
                                                    // first argument for find, second for update
    // a) update Single Data -->  db.collectionName.updateOne( {key : value} ,{$set:{key:value}})
    // b) update Multiple  --> db.collectionName.updateMany( {key : value} ,{$set:{key:value}})

//6) Delete Data  -->
// a)delete single Data --> db.collectionName.deleteOne({key:value})
// a)delete Multiple Data --> db.collectionName.deleteMany({key:value})



// Other Commands  -->
// 1)  view all Database  --> show dbs
// 2)   delete a collection (folder)  --> db.collectionName.drop();
// 3) delete a database  --> db.dropDataBase();



