const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://admin:${password}@cluster0.spvoa9i.mongodb.net/?retryWrites=true&w=majority`

const phoneSchema = new mongoose.Schema({
    name: String,
    number: Number,
    
  })
  const Contact = mongoose.model('phonebook', phoneSchema)


if(process.argv[3] && process.argv[4] ){

    mongoose
    .connect(url)
    .then((result)=>{
        
        const contact = new Contact({
            name:process.argv[3],
            number:process.argv[4],
        })

        return contact.save()
    })
    .then(() => {
        console.log(`added ${process.argv[3]} ${process.argv[4]} to phonebook`)
        return mongoose.connection.close()
      })

}
else{
    mongoose
    .connect(url)
    .then((result)=>{
        
        const contacts = Contact.find({}).then((result)=>{
            result.forEach(contact=>{
                console.log(contact)
            })
            mongoose.connection.close()
        })
       
    })




    
    
}
