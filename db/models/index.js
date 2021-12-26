const Food = require('./food');
const User = require('./user');
const Goal = require('./goal');
const Diary = require('./diary');
const Date = require('./date');
const DatabaseDiary = require('./databaseDiary');
const Plan = require('./plan');
const Activity = require('./activity');
const Exercise = require('./exercise');
const Verification = require('./verification');
const Measurement = require('./measurement');

Goal.belongsTo(User);
User.hasMany(Diary);
Date.hasMany(Diary);
User.hasMany(Food);
Date.hasMany(DatabaseDiary);
User.hasMany(DatabaseDiary);
Diary.belongsTo(Food);
Goal.belongsTo(Plan);
Goal.belongsTo(Activity);
User.hasOne(Verification);
User.hasOne(Measurement);
module.exports = { Food, User, Goal, Diary, Date, DatabaseDiary, Plan, Activity, Exercise, Verification, Measurement };