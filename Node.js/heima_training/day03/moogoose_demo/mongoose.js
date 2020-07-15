const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students', {
  useNewUrlParser: true, useUnifiedTopology: true,
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty
  .save()
  .then(() => {
    console.log('meow');
    Cat.find({ name: 'Zildjian' })
      .then((res) => {
        console.log(res);
      });
  });
