MYSQL:     mysql -u root -p
           root

needed to create data\db in c drive

mongod            		//allows us to use mongo commands (start cmd inside bin) (starts mongo daemon ie starts mongo db)
mongo             		//(in a parallel cmd) enters us into mongo shell where we can execute mongo commands
show dbs          		//show all databases (wont show a database which has no collection in it)
use test          		//creates and starts using a new database test if not present,else starts using test
show collections  		//shows list of collections(tables) in the database
db.students.find().pretty()	//db represents current database, student is a collection
db.students.find({country : "India"}).pretty()
db.createCollection("students")



Book.findOneAndUpdate(
{id:"6s5gd46sd4g6s4d6g546f4s4d6g"},    //string id works    id: req.params._id  also works
{$set:{title:"bhanu"}},                //if $set isnt passed then only title:"bhanu" will remain in the doc and author will be removed
{upsert:true},  //inserts the record if not found
function(err,result){//callback}
);

req.params._id is string
_id in mongoose is an object...so... result._id=="654dsf65df64sd6" gives true but  result._id==="654dsf65df64sd6" gives false 

Adding more indexes makes reading faster but writing slower.