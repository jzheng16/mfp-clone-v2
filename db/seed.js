const db = require('./');
const seed = require('./seed_data');
const { users, dates, foods, goals, activities, plans, exercises, measurements } = seed;

const seedUsers = () => db.model('users').bulkCreate(users);
const seedFoods = () => db.model('food').bulkCreate(foods);
const seedDates = () => db.model('date').bulkCreate(dates);
const seedGoals = () => db.model('goal').bulkCreate(goals);
const seedActivity = () => db.model('activity').bulkCreate(activities);
const seedPlan = () => db.model('plan').bulkCreate(plans);
const seedExercise = () => db.model('exercise').bulkCreate(exercises);
const seedMeasurement = () => db.model('measurement').bulkCreate(measurements);

// seedUsers();

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedFoods)
  .then(seedDates)
  .then(seedGoals)
  .then(seedActivity)
  .then(seedPlan)
  .then(seedExercise)
  .then(seedMeasurement)
  .then(() => console.log('database seeded successfully'))
  .catch(error => console.error(error))
  .finally(() => db.close());
