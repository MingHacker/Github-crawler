const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDemo');
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', () => {
  console.log('connected');
});

let repoSchema = mongoose.Schema({
  repo_id: String,
  username: String,
  url: String,
  forks: Number,
  description: String,
  full_name: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = async (repo) => {
  await Repo.findOneAndUpdate(
    { repo_id: repo.id },
    repo,
    {
      new: true, // return the updated results
      upsert: true, // if not find user, insert into as new one
      useFindAndModify: false,
    },
    (err, doc) => {
      console.log(doc);
    }
  );
};

let get = () => {
  return Repo.find().limit(25).sort({ forks: -1 });
};

module.exports.save = save;
module.exports.get = get;
