const getTime = require('date-fns/getTime');
const getISODay = require('date-fns/getISODay');
const format = require('date-fns/format');
const addDays = require('date-fns/addDays');

const users =
  [{ email: 'bobo@bobo.com', password: '1234', first_name: 'Bobo', last_name: 'Kins', weight: [151, 153, 175, 173, 151], verified: true },
  { email: 'medie1@ebay.co.uk', password: 'QPUJAR1OwQ2i', first_name: 'Marlo', last_name: 'Edie', weight: [159, 162, 164, 158, 174] },
  { email: 'psimony2@rambler.ru', password: 'Qped6xY', first_name: 'Perla', last_name: 'Simony', weight: [169, 179, 162, 169, 156] },
  { email: 'cforrestor3@foxnews.com', password: '1NouRgEFKi8', first_name: 'Catlaina', last_name: 'Forrestor', weight: [177, 166, 171, 180, 162] },
  { email: 'jfifoot4@arizona.edu', password: 'zm6Fhj4', first_name: 'Joana', last_name: 'Fifoot', weight: [170, 167, 150, 165, 154] },
  { email: 'csandle5@zdnet.com', password: 'UWGcjEU8r', first_name: 'Coleen', last_name: 'Sandle', weight: [155, 151, 163, 171, 167] },
  { email: 'dtreker6@washingtonpost.com', password: 'xyPY3xJKj', first_name: 'Dianemarie', last_name: 'Treker', weight: [173, 172, 154, 168, 173] },
  { email: 'bbrakewell7@com.com', password: 'I1vCMIgUfcv', first_name: 'Bessie', last_name: 'Brakewell', weight: [169, 166, 168, 173, 152] },
  { email: 'mvoff8@nps.gov', password: 'CsBUxSQ8', first_name: 'Milt', last_name: 'Voff', weight: [159, 161, 164, 162, 162] },
  { email: 'mhickinbottom9@columbia.edu', password: 'GsYLUtGBUKT', first_name: 'Madlin', last_name: 'Hickinbottom', weight: [171, 174, 157, 178, 167] }
  ];

const dates = [];

for (let i = 0; i < 1000; i += 1) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayOfWeek = getISODay(addDays(new Date('2018-01-01'), i));
  const formattedDayOfWeek = days[dayOfWeek - 1];
  const formattedDate = format((addDays(new Date('2018-01-01'), i)), 'yyyy-MM-dd');
  dates.push({ id: i + 1, day: formattedDate, dow: formattedDayOfWeek });
}

const goals =
  [
    { calorie: 2950, weight: 155, carbs: 118, protein: 109, fat: 43, user_id: 2 },
    { calorie: 1238, weight: 138, carbs: 93, protein: 122, fat: 141, user_id: 3 },
    { calorie: 2799, weight: 180, carbs: 69, protein: 81, fat: 64, user_id: 4 },
    { calorie: 1587, weight: 157, carbs: 60, protein: 132, fat: 43, user_id: 5 },
    { calorie: 1512, weight: 178, carbs: 122, protein: 83, fat: 76, user_id: 6 },
    { calorie: 2540, weight: 170, carbs: 46, protein: 117, fat: 47, user_id: 7 },
    { calorie: 2139, weight: 161, carbs: 85, protein: 115, fat: 131, user_id: 8 },
    { calorie: 2897, weight: 174, carbs: 126, protein: 93, fat: 69, user_id: 9 },
    { calorie: 2593, weight: 145, carbs: 140, protein: 99, fat: 110, user_id: 10 },
  ];

const foods = [{ name: 'Avocado', calories: 234, carbs: 12, protein: 3, fat: 21, user_id: 1 },
{ name: 'Eggs', calories: 143, carbs: 1, protein: 13, fat: 10, user_id: 1 },
{ name: 'Fage Total 2% Greek Yogurt', calories: 75, carbs: 4, protein: 12, fat: 2, user_id: 1 },
{ name: 'Kirkland Bacon', calories: 444, carbs: 0, protein: 33, fat: 33, user_id: 1 },
{ name: 'Rice - Medium Grained White', calories: 130, carbs: 29, protein: 2, fat: 0, user_id: 1 },
{ name: 'Shrimp', calories: 59, carbs: 0, protein: 25, fat: 0, user_id: 1 },
{ name: 'Optimum Nutrition - Extreme Milk Chocolate', calories: 120, carbs: 3, protein: 24, fat: 2, user_id: 1 },
{ name: 'Salmon', calories: 88, carbs: 2, protein: 19, fat: 1, user_id: 1 },
{ name: 'Turkey (Dark Meat)', calories: 192, carbs: 0, protein: 28, fat: 8, user_id: 1 },
{ name: 'Spinach (Boiled)', calories: 23, carbs: 4, protein: 3, fat: 0, user_id: 1 },
{ name: 'Sweet Potato', calories: 86, carbs: 20, protein: 2, fat: 0, user_id: 1 },
{ name: 'Broccoli', calories: 34, carbs: 7, protein: 3, fat: 0, user_id: 1 },
{ name: 'Carrots', calories: 41, carbs: 10, protein: 1, fat: 0, user_id: 1 },
{ name: 'Blueberries', calories: 57, carbs: 14, protein: 1, fat: 0, user_id: 1 },
{ name: 'Whole-wheat toasted bread', calories: 277, carbs: 52, protein: 11, fat: 5, user_id: 1 }];

const activities = [
  {
    title: 'Sedentary',
    description: 'Little to no regular exercise.',
    factor: 1.2
  },
  {
    title: 'Lightly Active',
    description: 'Intensive exercise for at least 20 minutes 1 to 3 times per week. This may include such things as bicycling, jogging, basketball, swimming, skating, etc.  If you do not exercise regularly, but you maintain a busy life style that requires you to walk frequently for long periods, you meet the requirements of this level.',
    factor: 1.375
  },
  {
    title: 'Moderately active',
    description: 'Intensive exercise for at least 30 to 60 minutes 3 to 4 times per week. Any of the activities listed above will qualify.',
    factor: 1.55
  },
  {
    title: 'Very active',
    description: 'Intensive exercise for 60 minutes or greater 5 to 7 days per week (see sample activities above).  Labor-intensive occupations also qualify for this level.  Labor-intensive occupations include construction work (brick laying, carpentry, general labor, etc.). Also farming, landscape worker or similar occupations.',
    factor: 1.7
  },
  {
    title: 'Extremely active',
    description: 'Exceedingly active and/or very demanding activities:  Examples include:  (1) athlete with an almost unstoppable training schedule with multiple training sessions throughout the day  (2) very demanding job, such as shoveling coal or working long hours on an assembly line. Generally, this level of activity is very difficult to achieve.',
    factor: 1.9
  }
];

const plans = [
  {
    title: 'Gain Weight',
    description: 'To gain weight, we recommend eating 500 calories above your TDEE to gain 1 pound a week',
    calorieFactor: 500,
    proteinFactor: 0.8,
    fatFactor: 0.5
  },
  {
    title: 'Lose Weight ',
    description: 'To lose weight, we recommend eating 500 calories below your TDEE to lose 1 pound per week',
    calorieFactor: -500,
    proteinFactor: 0.8,
    fatFactor: 0.5
  },
  {
    title: 'Build Muscle (Bulk)',
    description: 'To gain muscle, we recommend eating 500 calories above your TDEE to gain a pound a week and eating more protein to build muscle and carbs for energy',
    calorieFactor: 500,
    proteinFactor: 1,
    fatFactor: 0.4
  },
  {
    title: 'Cut',
    description: 'To lose weight while retaining as much muscle as possible, we recommend eating 250 calories less than your TDEE with more protein and less carbs. This will make sure you are retaining as much muscle as possible but you might see notciebly less energy during your workouts.',
    calorieFactor: -250,
    proteinFactor: 1,
    fatFactor: 0.4
  },
];

const exercises = [
  {
    name: '2 Handed Kettlebell Swing',
    description: '<p>Two Handed Russian Style Kettlebell swing</p>'
  },
  {
    name: 'Arnold Shoulder Press',
    description: '<p>Very common shoulder exercise.</p>\n<p> </p>\n<p>As shown here: https://www.youtube.com/watch?v=vj2w851ZHRM</p>'
  },
  {
    name: 'Axe Hold',
    description: '<p>Grab dumbbells and extend arms to side and hold as long as you can</p>'
  },
  {
    name: 'Barbell Ab Rollout',
    description: '<p>Place a barbell on the floor at your feet.</p>\n<p>Bending at the waist, grip the barbell with a shoulder with overhand grip.</p>\n<p>With a slow controlled motion, roll the bar out so that your back is straight.</p>\n<p>Roll back up raising your hips and butt as you return to the starting position.</p>'
  },
  {
    name: 'Barbell Hack Squats',
    description: '<p>Perform leg squats with barbell behind your legs</p>'
  },
  {
    name: 'Barbell Lunges',
    description: '<p>Put barbell on the back of your shoulders. Stand upright, then take the first step forward. Step should bring you forward so that your supporting legs knee can touch the floor. Then stand back up and repeat with the other leg.</p>\n<p>Remember to keep good posture.</p>'
  },
  {
    name: 'Barbell Triceps Extension',
    description: '<p>Position barbell overhead with narrow overhand grip.</p>\n<p>Lower forearm behind upper arm with elbows remaining overhead. Extend forearm overhead. Lower and repeat.</p>'
  },
  {
    name: 'Bear Walk',
    description: '<p>-Rest your weight on your palms and the balls of your feet, not dissimilar to normal pushup position</p>\n<p>-Move by stepping with your R palm and L foot, then your L palm and R foot.  Basically, walk like a lumbering bear.</p>\n<p>-Move as fast as you can.  Measure your reps/sets in either distance (i.e. 40 yards) or time (i.e. 45 seconds)</p>\n<p>-Works your Pecs, Deltoids, Triceps, Traps, Lats, Abs and Lower Back, Hip Flexors, Quads, Glutes and Calves</p>'
  },
  {
    name: 'Bear Walk',
    description: '<p>-Rest your weight on your palms and the balls of your feet, not dissimilar to normal pushup position</p>\n<p>-Move by stepping with your R palm and L foot, then your L palm and R foot.  Basically, walk like a lumbering bear.</p>\n<p>-Move as fast as you can.  Measure your reps/sets in either distance (i.e. 40 yards) or time (i.e. 45 seconds)</p>\n<p>-Works your Pecs, Deltoids, Triceps, Traps, Lats, Abs and Lower Back, Hip Flexors, Quads, Glutes and Calves</p>'
  },
  {
    name: 'Bench Press',
    description: "<p>Lay down on a bench, the bar should be directly above your eyes, the knees are somewhat angled and the feet are firmly on the floor. Concentrate, breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up.</p>\n<p>If you train with a high weight it is advisable to have a <em>spotter</em> that can help you up if you can't lift the weight on your own.</p>\n<p>With the width of the grip you can also control which part of the chest is trained more:</p>\n<ul>\n<li>wide grip: outer chest muscles</li>\n<li>narrow grip: inner chest muscles and triceps</li>\n</ul>"
  },
  {
    name: 'Benchpress Dumbbells',
    description: '<p>The movement is very similar to benchpressing with a barbell, however, the weight is brought down to the chest at a lower point.</p>\n<p>Hold two dumbbells and lay down on a bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.</p>'
  },
  {
    name: 'Bench Press Narrow Grip',
    description: "<p>Lay down on a bench, the bar is directly over your eyes, the knees form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip (around 20cm.). Lead the weight slowly down till the arms are parallel to the floor (elbow: right angle), press then the bar up. When bringing the bar down, don't let it down on your nipples as with the regular bench pressing, but somewhat lower.</p>"
  },
  {
    name: 'Bent High Pulls',
    description: '<p>Bend over slightly while holding two dumbbells.  Pull the dumbbells up to your chest, keeping your elbows as high as you can.</p>'
  },
  {
    name: 'Bent Over Barbell Row',
    description: '<ol>\n<li>Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.</li>\n<li>Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause.</li>\n<li>Then inhale and slowly lower the barbell back to the starting position.</li>\n<li>Repeat for the recommended amount of repetitions.</li>\n</ol>'
  },
  {
    name: 'Bentover Dumbbell Rows',
    description: '<p>With dumbbells in hand, bend at the hip until hands hang just below the knees (similar to straight-legged-deadlift starting position). Keep upper body angle constant while contracting your lats to pull you ellbows back pinching the shoulder blades at the top. Try not to stand up with every rep, check hands go below knees on every rep.</p>'
  },
  {
    name: 'Bent-over Lateral Raises',
    description: '<p>Sit on bench while holding weights. Bend forward as far as possible, with arms slightly bent at the elbow. Perform a lateral raise while maintaining the bend in your elbow.</p>'
  },
  {
    name: 'Bent Over Rowing',
    description: "<p>Grab the barbell with a wide grip (slightly more than shoulder wide) and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chest's out during the whole exercise.</p>\n<p>Pull now the barbell with a fast movement towards your belly button, not further up. Go slowly down to the initial position. Don't swing with your body and keep your arms next to your body.</p>"
  },
  {
    name: 'Bent Over Rowing Reverse',
    description: "<p>The same as <em>regular</em> rowing, but holding a reversed grip (your palms pointing forwards):</p>\n<p>Grab the barbell with a wide grIp (slightly more than shoulder wide) and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chest's out during the whole exercise.</p>\n<p>Pull now the barbell with a fast movement towards your belly button, not further up. Go slowly down to the initial position. Don't swing with your body and keep your arms next to your body.</p>"
  },
  {
    name: 'Biceps Curls With Barbell',
    description: "<p>Hold the Barbell shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement.</p>\n<p>Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).</p>"
  },
  {
    name: 'Biceps Curls With Dumbbell',
    description: "<p>Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly.</p>\n<p>Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).</p>"
  },
  {
    name: 'Biceps Curls With SZ-bar',
    description: "<p>Hold the SZ-bar shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement.</p>\n<p>Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).</p>"
  },
  {
    name: 'Biceps Curl With Cable',
    description: '<p>Stand around 30 - 40cm away from the cable, the feet are firmly on the floor. Take the bar and lift the weight with a fast movements. Lower the weight as with the dumbbell curls slowly and controlled.</p>'
  },
  {
    name: 'Body-Ups',
    description: '<ol>\n<li>Assume a plank position on the ground. You should be supporting your bodyweight on your toes and forearms, keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position.</li>\n<li>Pressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement.</li>\n<li>Slowly lower your forearms back to the ground by allowing the elbows to flex.</li>\n<li>Repeat as needed.</li>\n</ol>'
  },
  {
    name: 'Braced Squat',
    description: '<p>Stand with feet slightly wider than shoulder-width apart, while standing as tall as you can.</p>\n<p>Grab a weight plate and hold it out in front of your body with arms straight out. Keep your core tight and stand with a natural arch in your back.</p>\n<p>Now, push hips back and bend knees down into a squat as far as you can. Hold for a few moments and bring yourself back up to the starting position.</p>'
  },
  {
    name: 'Bulgarian Split Squat',
    description: '<p>Rest back foot on an elevated surface with sole pointing up. keep your weight over your front leg as you lower yourself</p>'
  },
  {
    name: 'Burpees',
    description: '<p>Jump, lay down on your chest, do a pushup then jump, repeat</p>'
  },
  {
    name: 'Butterfly',
    description: "<p>Sit on the butterfly machine, the feet have a good contact with the floor, the upper arms are parallel to the floor. Press your arms together till the handles are practically together (but aren't!). Go slowly back. The weights should stay all the time in the air.</p>"
  },
  {
    name: 'Butterfly Narrow Grip',
    description: "<p>The movement is the same as with a regular butterfly, only that the grip is narrow:</p>\n<p>Sit on the butterfly machine, the feet have a good contact with the floor, the upper arms are parallel to the floor. Press your arms together till the handles are practically together (but aren't!). Go slowly back. The weights should stay all the time in the air.</p>"
  },
  {
    name: 'Butterfly Reverse',
    description: ''
  },
  {
    name: 'Cable Cross-over',
    description: '<p>Begin with cables at about shoulder height, one in each hand. Take a step forward so that one foot is in front of the other, for stability, and so that there is tension on the cables. Bring hands together in front of you. Try to make your hands overlap (so that the cables cross) a few inches.</p>'
  },
  {
    name: 'Cable External Rotation',
    description: '<p>Steps:</p>\n<ol>\n<li>Start off placing an extension band around a post or in a secure position where it will not release and is at elbow level.</li>\n<li>Position yourself to the side of the band and with your hand that is opposite of the band, reach out and grab the handle.</li>\n<li>Bring the band to your chest keeping your elbow bent in a 90 degree angle then slowly rotate your arm in a backhand motion so that the band externally rotates out</li>\n<li>Continue out as far as possible so that you feel a stretch in your shoulders, hold for a count and then return back to the starting position.</li>\n<li>Repeat for as many reps and sets as desired.</li>\n</ol>'
  },
  {
    name: 'Cable Woodchoppers',
    description: '<p>Set cable pulley slightly lower than chest height. Keep body facing forward with hips stable.  Grab the pulley handle, fully extend your arms and bring your arms forward and across your body. Hold for 1 second at the end of the movement and slowly return to starting position.</p>'
  },
  {
    name: 'Calf Press Using Leg Press Machine',
    description: '<p>Put  the balls of your feet on an extended leg press pad.  Use your calves to press the weight by flexing your feet/toes into a pointed position, and releasing back into a relaxed position.</p>\n<p>This exercise builds mass and strength in the Gastrocnemius and Soleus muscles as well, if not better, than any calf exercise.</p>'
  },
  {
    name: 'Calf Raises on Hackenschmitt Machine',
    description: '<p>Place yourself on the machine with your back firmly against the backrest, the feet are on the platform for calf raises. Check that the feet are half free and that you can completely stretch the calf muscles down.</p>\n<p>With straight knees pull up your weight as much as you can. Go with a fluid movement down till the calves are completely stretched. Repeat.</p>'
  },
  {
    name: 'Chin-ups',
    description: '<p>Like pull-ups but with a reverse grip</p>'
  },
  {
    name: 'Close-grip Bench Press',
    description: '<p>Perform a typical bench press, but hold the bar with your hands approximately shoulder-width apart and keep your elbows close to your body.</p>'
  },
  {
    name: 'Close-grip Lat Pull Down',
    description: '<p>Grip the pull-down bar with your hands closer than shoulder width apart, with your palms facing away from you. Lean back slightly. Pull the bar down towards your chest, keeping your elbows close to your sides as you come down. Pull your shoulders back at the end of the motion.</p>'
  },
  {
    name: 'Cross-Bench Dumbbell Pullovers',
    description: "<p>Grasp a moderately weighted dumbbell so your palms are flat against the underside of the top plates and your thumbs are around the bar. Lie on your back across a flat bench so only your upper back and shoulders are in contact with the bench. Your feet should be set about shoulder-width apart and your head should hang slightly downward. With the dumbbell supported at arm's length directly about your chest, bend your arms about 15 degrees and keep them bent throughout the movement. Slowly lower the dumbbell backward and downward in a semicircle arc to as low a position as is comfortably possible. Raise it slowly back along the same arc to the starting point, and repeat for the required number of repetitions.</p>"
  },
  {
    name: 'Crunches',
    description: '<p>Lay down on your back a soft surface, the feet are on the floor. Ask a partner or use some other help (barbell, etc.) to keep them fixed, your hands are behind your head. From this position move your upper body up till your head or elbows touch your knees. Do this movement by rolling up your back.</p>'
  },
  {
    name: 'Crunches on Machine',
    description: '<p>The procedure is very similar as for regular crunches, only with the additional weight of the machine. Sit on the machine, put both feet firmly on the ground. Grab the to the weights, cables, etc. and do a rolling motion forwards (the spine should ideally lose touch vertebra by vertebra). Slowly return to the starting position. </p>'
  },
  {
    name: 'Crunches With Cable',
    description: '<p>Take the cable on your hands and hold it next to your temples. Knee down and hold your upper body straight and bend forward. Go down with a fast movement, rolling your back in (your ellbows point to your knees). Once down, go slowly back to the initial position.</p>'
  },
  {
    name: 'Crunches With Legs Up',
    description: '<p>On your back, legs extended straight up, reach toward your toes with your hands and lift your shoulder blades off the ground and back.</p>'
  },
  {
    name: 'Deadhang',
    description: '<p>Deadhang performed on an edge either with or without added weight (adujst edge or weight to adjust difficulty)</p>'
  },
  {
    name: 'Deadlifts',
    description: '<p>Stand firmly, with your feet slightly more than shoulder wide apart. Stand directly behind the bar where it should barely touch your shin, your feet pointing a bit out. Bend down with a straight back, the knees also pointing somewhat out. Grab the bar with a shoulder wide grip, one underhand, one reverse grip.</p>\n<p>Pull the weight up. At the highest point make a slight hollow back and pull the bar back. Hold 1 or 2 seconds that position. Go down, making sure the back is not bent. Once down you can either go back again as soon as the weights touch the floor, or make a pause, depending on the weight.</p>'
  },
  {
    name: 'Decline Bench Press Barbell',
    description: '<p>Lay down on a decline bench, the bar should be directly above your eyes, the knees are somewhat angled and the feet are firmly on the floor. Concentrate, breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up.</p>'
  },
  {
    name: 'Decline Bench Press Dumbbell',
    description: '<p>Take two dumbbells and sit on a decline bench, the feet are firmly on the floor, the head is resting the bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.</p>'
  },
  {
    name: 'Decline Pushups',
    description: '<p>With your feet raised approximately 30cm on a platform, align your shoulders, elbows and hands, then perform regular pushups. This emphasises the clavicular fibers of the pectoralis major.</p>'
  },
  {
    name: 'Deficit Deadlift',
    description: '<p>Preparation</p>\n<p>Stand on weight plate, bumper plate, or shallow elevated platform with loaded bar above feet. Squat down and grasp bar with shoulder width or slightly wider overhand or mixed grip.</p>\n<p> </p>\n<p>Execution</p>\n<p>Lift bar by extending hips and knees to full extension. Pull shoulders back at top of lift if rounded. Return weights to floor by bending hips back while allowing knees to bend forward, keeping back straight and knees pointed same direction as feet. Repeat.</p>\n<p> </p>\n<p>Comments</p>\n<p>Throughout lift, keep hips low, shoulders high, arms and back straight. Knees should point same direction as feet throughout movement. Keep bar close to body to improve mechanical leverage. Grip strength and strength endurance often limit ability to perform multiple reps at heavy resistances. Gym chalk, wrist straps, grip work, and mixed grip can be used to enhance grip. Mixed grip indicates one hand holding with overhand grip and other hand holding with underhand grip. Lever barbell jack can be used to lift barbell from floor for easier loading and unloading of weight plates.</p>\n<p>Barbell Deficit Deadlift emphasizes building strength through lowest portion of Deadlift. Target muscle is exercised isometrically. Heavy barbell deadlifts significantly engages Latissmus Dorsi. See Barbell Deficit Deadlift under Gluteus Maximus. Also see Deadlift Analysis.</p>'
  },
  {
    name: 'Diagonal Shoulder Press',
    description: "<p>You sit at the bench press device, back slightly tilted to the back. The bar should be about 20 cm in front of you. Then you push the bar and take it back again, as you would with a bench press.</p>\n<p>In this position you strain your chest muscles a lot less, which is nice if you want to train, but your chest hasn't recovered yet.</p>\n<p>Here's a link to a girl on a machine specialized for this exercise, to give a better description than my failing words above.</p>\n<p>http://www.schnell-online.de/db_imgs/products/img/t-80400.jpg</p>"
  },
  {
    name: 'Dips',
    description: "<p>Hold onto the bars at a narrow place (if they are not parallel) and press yourself up, but don't stretch the arms completely, so the muscles stay during the whole exercise under tension. Now bend the arms and go down as much as you can, keeping the elbows always pointing back, At this point, you can make a short pause before repeating the movement.</p>"
  },
  {
    name: 'Dips Between Two Benches',
    description: "<p>Put two benches so far appart, that you can hold onto one with your hands and are just able to reach the other with your feet. The legs stay during the exercise completely stretched. With your elbows facing back, bend them as much as you can. Push yourself up, but don't stretch out the arms.</p>"
  },
  {
    name: 'Dumbbell Concentration Curl',
    description: '<p>Sit on bench. Grasp dumbbell between feet. Place back of upper arm to inner thigh. Lean into leg to raise elbow slightly.</p>'
  },
  {
    name: 'Dumbbell Goblet Squat',
    description: '<p>Grasp dumbbell with both hands at the sides of the upper plates. Hold dumbbell in front of chest, close to torso. Place feet about shoulderwide apart, keep knees slightly bent.</p>\n<p>Squat down until thighs are parallel to floor. Keep back straight, bend and move hips backward to keep knees above feet. Return, keep knees slightly flexed. Repeat.</p>\n<p>Keep bodyweight on heels and look ahead or slightly above to keep back straight.</p>'
  },
  {
    name: 'Dumbbell Incline Curl',
    description: '<p>With elbows back to sides, raise one dumbbell and rotate forearm until forearm is vertical and palm faces shoulder. Lower to original position and repeat with opposite arm. Continue to alternate between sides.</p>'
  },
  {
    name: 'Dumbbell Lunges Standing',
    description: '<p>.</p>'
  },
  {
    name: 'Dumbbell Lunges Walking',
    description: "<p>Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesn't touch the ground. \"Complete\" the step by standing up and repeat the movement with the other leg.</p>"
  },
  {
    name: 'Dumbbells on Scott Machine',
    description: ''
  },
  {
    name: 'Dumbbell Triceps Extension',
    description: '<p>Position one dumbbell over head with both hands under inner plate (heart shaped grip).</p>\n<p>With elbows over head, lower forearm behind upper arm by flexing elbows. Flex wrists at bottom to avoid hitting dumbbell on back of neck. Raise dumbbell over head by extending elbows while hyperextending wrists. Return and repeat.</p>'
  },
  {
    name: 'Extenseurs - Face',
    description: '<p>En face</p>\n<ol>\n<li>Tirer</li>\n<li>relacher doucement</li>\n</ol>'
  },
  {
    name: 'Facepull',
    description: "<p>Attach a rope to a pulley station set at about chest level.</p>\n<p>Step back so you're supporting the weight with arms completely outstretched and assume a staggered (one foot forward) stance. Bend the knees slightly for a stable base.</p>\n<p>Retract the scapulae (squeeze your partner's finger with your shoulder blades) and pull the center of the rope slightly up towards the face. A good cue is to think about pulling the ends of the rope apart, not just pulling back.</p>\n<p>As you near your face, externally rotate so your knuckles are facing the ceiling.</p>\n<p>Hold for one second at the top position and slowly lower.</p>"
  },
  {
    name: 'Flutter Kicks',
    description: '<p>-Laying on the back, lift your straightened legs from the ground at a 45 degree angle. </p>\n<p>-As your Left foot travels downward and nearly touches the floor, your Right foot should seek to reach a 90 degree angle, or as close to one as possible.</p>\n<p>-Bring your R foot down until it nearly touches the floor, and bring your L foot upwards.  Maintain leg rigidity throughout the exercise.  Your head should stay off the ground, supported by tightened upper abdominals.</p>\n<p>-(L up R down, L down R up, x2)  ^v, v^, ^v, v^ = 1 rep</p>\n<p>-Primarily works the Rectus Abdominus, the hip flexors and the lower back. Secondarily works the Obliques.  Emphasis placed on the lower quadrant of the abs.</p>\n<p> </p>'
  },
  {
    name: 'Fly With Cable',
    description: ''
  },
  {
    name: 'Fly With Dumbbells',
    description: '<p>Take two dumbbells and lay on a bench, make sure the feet are firmly on the ground and your back is not arched, but has good contact with the bench. The arms are stretched in front of you, about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up.</p>'
  },
  {
    name: 'Fly With Dumbbells, Decline Bench',
    description: '<p>The exercise is the same as with a regular bench:</p>\n<p>Take two dumbbells and lay on a bench, make sure the feet are firmly on the ground and your back is not arched, but has good contact with the bench. The arms are stretched in front of you, about shoulder wide. Bend now the arms a bit and let them down with a half-circle movement to the side. Without changing the angle of the elbow bring them in a fluid movement back up.</p>'
  },
  {
    name: 'French Press (skullcrusher) Dumbbells',
    description: "<p>Hold the dumbbells and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the weights and bend them so that the dumbbells are lowered (make sure they don't touch each other). Just before they touch your forehead, push them up.</p>\n<p>Pay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move.</p>"
  },
  {
    name: 'French Press (skullcrusher) SZ-bar',
    description: '<p>Hold the SZ-bar and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the bar and bend them so that the bar is lowered. Just before it touches your forehead, push it up.</p>\n<p>Pay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move.</p>'
  },
  {
    name: 'Front Raises',
    description: '<p>To execute the exercise, the lifter stands with their feet shoulder width apart and weights or resistance handles held by their side with a pronated (overhand) grip.</p>\n<p>The movement is to bring the arms up in front of the body to eye level and with only a slight bend in the elbow. This isolates the anterior deltoid muscle (front of the shoulder) and uses the anterior deltoid to lift the weight.</p>\n<p>When lifting it is important to keep the body still so the anterior deltoid is fully utilised; if the weight cannot be lifted by standing still then it is too heavy and a lower weight is needed. It is important to keep a slight bend in the elbow when lifting as keeping the elbow locked will add stress to the elbow joint and could cause injury.</p>\n<p>A neutral grip, similar to that used in the hammer curl, can also be used. With this variation the weight is again raised to eye level, but out to a 45 degree angle from the front of the body. This may be beneficial for those with shoulder injuries, particularly those related to the rotator cuff.</p>'
  },
  {
    name: 'Front Squats',
    description: '<p>Squats</p>'
  },
  {
    name: 'Full Sit Outs',
    description: '<p>(A) Get in high plank position on your hands and toes.(B) Shift your weight to your left hand as you turn your body to the right; bend your right leg behind you and extend your right arm up. Return to the center and repeat on the opposite side. Continue, alternating sides.<strong>Make it easier:</strong> Don’t raise your arm after you bend your leg behind you.<strong>Make it harder:</strong> Balance with your arm and leg extended for two counts.</p>'
  },
  {
    name: 'Glute Bridge',
    description: '<p>Lie on you back with your hips and knees flexed, feet on the ground. From this position, raise your butt off of the ground to a height where your body makes a straight line from your knees to your shoulders. To make the exercise more intense, you can add weight by letting a barbell rest on your hips as you complete the motion, or you can put your feet on a slightly higher surface such as a step or a bench.</p>'
  },
  {
    name: 'Good Mornings',
    description: ''
  },
  {
    name: 'Hammercurls',
    description: "<p>Hold two dumbbells and sit on a bench with a straight back, the shoulders are slightly rolled backwards. Your pals point to your body. Bend the arms and bring the weight up with a fast movement. Don't rotate your hands, as with the curls. Without any pause bring the dumbbell down with a slow, controlled movement.</p>\n<p>Don't swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and don't move.</p>"
  },
  {
    name: 'Hammercurls on Cable',
    description: "<p>Take a cable in your hands (palms parallel, point to each other), the body is straight. Bend the arms and bring the weight up with a fast movement. Without any pause bring it back down with a slow, controlled movement, but don't stretch completely your arms.</p>\n<p>Don't swing your body during the exercise, the biceps should do all the work here. The elbows are at your side and don't move.</p>"
  },
  {
    name: 'Hand Grip',
    description: '<p>chrome Hand Flex Grip to build up forearms muscles</p>'
  },
  {
    name: 'Hanging Leg Raises',
    description: '<p>Hanging from bar or straps, bring legs up with knees extended or flexed</p>'
  },
  {
    name: 'Hercules Pillars',
    description: '<p>Grab two cables stand in the middle so both have tension and hold</p>'
  },
  {
    name: 'High Knee Jumps',
    description: '<p>-Start with legs slightly wider than shoulder width</p>\n<p>-Drop into a bodyweight squat</p>\n<p>-As you hit the bottom of the squat, explode upwards into a jump while simultaneously tucking your knees into your chest midflight.  Remain tucked until the apex of your jump.</p>\n<p>-Land on both feet, making sure your knees are not locked so as to avoid excessive strain upon your joints.  Collect yourself into the next rep as quickly but under control as possible.</p>'
  },
  {
    name: 'High Knees',
    description: '<p>-Start with legs at a comfortable standing width</p>\n<p>-Run in place, bringing knees to or above waist level</p>'
  },
  {
    name: 'High Pull',
    description: '<p>Use a light barbell, perform explosive lift up starting from underneath knee cap level. Lift/raise explosively using hips, at shoulder level. Tempo: 2111</p>'
  },
  {
    name: 'Hip Raise, Lying',
    description: 'Lying down on your back, with your feet flat on the floor. Raise your hips up evenly as high as you can and hold for as long as you can.'
  },
  {
    name: 'Hollow Hold',
    description: '<p>Get on a mat and lie on your back. Contract your abs, stretch your raise and legs and raise them (your head and shoulders are also be raised). Make sure your lower back remains in contact with the mat.</p>'
  },
  {
    name: 'Hyperextensions',
    description: "<p>Lay on the hyperextension pad with the belly button just at the leading edge, the upper body can hang freely. Tense your whole back's muscles and bring your upper body up till it is horizontal, but not more. Go slowly down and don't relax your muscles.</p>"
  },
  {
    name: 'Incline Bench Press',
    description: '<p>To do slowly, tempo is 4010</p>'
  },
  {
    name: 'Incline Dumbbell Flye',
    description: '<p>Use inclined bench. Hold dumbbells straight out to your sides, elbows slightly bent. Bring arms together above you, keeping angle of elbows fixed.</p>'
  },
  {
    name: 'Incline Dumbbell Press',
    description: '<ul>\n<li>Bench should be angled anywhere from 30 to 45 degrees</li>\n<li>Be sure to press dumbbells straight upward (perpendicular to the floor)</li>\n</ul>'
  },
  {
    name: 'Incline Dumbbell Row',
    description: '<ol>\n<li>Using a neutral grip, lean into an incline bench.</li>\n<li>Take a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position.</li>\n<li>Retract the shoulder blades and flex the elbows to row the dumbbells to your side.</li>\n<li>Pause at the top of the motion, and then return to the starting position.</li>\n</ol>'
  },
  {
    name: 'Incline Plank With Alternate Floor Touch',
    description: '<p>Perform the plank with legs elevated, feet on a gymball. Once stabilised, slowly move one foot sideways off the ball, then make it touch the floor, then come back to starting position. Alternate with the other foot.</p>\n<p>This is a core exercise.</p>'
  },
  {
    name: 'Incline Pushups',
    description: '<p>Regular push with a 30 degree incline.</p>'
  },
  {
    name: 'Isometric Wipers',
    description: '<p>Assume push-up position, with hands slightly wider than shoulder width.</p>\n<p>Shift body weight as far as possible to one side, allowing the elbow on that side to flex. </p>\n<p>Reverse the motion, moving completely over to the other side.</p>\n<p>Return to the starting position, and repeat for the desired number of repetitions.</p>'
  },
  {
    name: 'Jogging',
    description: '<p>Get your shoes on, go outside and start running at a moderate pace.</p>'
  },
  {
    name: 'Kettlebell Swings',
    description: "<p>Hold the kettlebell securely in both hands. Keep your back flat throughout the move, avoiding any rounding of the spine.Keeping your knees \"soft\", hinge your hips backwards, letting the kettlebell swing between your knees.</p>\n<p>You want to bend from the hips as far as you can <em>without letting your back round forwards</em>. Then, snap your hips forwards quickly and standing up straight, locking your body in an upright posture.</p>\n<p>The speed you do this will cause your arms and the kettlebell to swing up in front of you. Don't try to <em>lift</em> the kettlebell with your arms. The snapping forwards of your hips will cause the kettlebell to swing forwards through momentum. Depending on the weight of the kettlebell and the speed of your hip movement, your arms will swing up to about shoulder height. At the top of this swing, let your hips hinge backwards again as the kettlebell swings back down to between your legs and the start of the next repetition.</p>"
  },
  {
    name: 'Lateral Raises',
    description: '<p>.</p>'
  },
  {
    name: 'Lateral Raises on Cable, One Armed',
    description: '<p>.</p>'
  },
  {
    name: 'Lateral-to-Front Raises',
    description: '<p>-(1) Perform a lateral raise, pausing at the top of the lift (2).</p>\n<p>-Instead of lowering the weight, bring it to the front of your body so that you appear to be at the top position of a front raise.  You will do this by using a Pec Fly motion, maintaining straight arms. (3)</p>\n<p>-Now lower the weight to your quadriceps, or, in other words, lower the dumbbells as though you are completing a Front Raise repetition. (4)</p>\n<p>-Reverse the motion:  Perform a front raise (5), at the apex of the lift use a Reverse Fly motion to position the weights at the top of a Lateral Raise (6), and finally, lower the weights until your palms are essentially touching the sides of your thighs (7).  THIS IS ONE REP.</p>\n<p>(1) l  <em>front view  </em>(2) -l- <em> FV  </em>  (3) l-  <em>side view</em>   (4) l  <em>SV/FV</em>   (5) l-  <em>SV  </em> (6) -l-  <em>FV  </em>  (7)  l  <em>FV/SV</em></p>'
  },
  {
    name: 'Lat Pull Down (Leaning Back)',
    description: '<p>Lean Back, Pull into chest</p>'
  },
  {
    name: 'Lat Pull Down (Straight Back)',
    description: '<p>Pull bar down to strenum and keep straight back.</p>'
  },
  {
    name: 'Leg Curls (laying)',
    description: '<p>Lay on a bench and put your calves behind the leg holder (better if they are hold on around the lower calves). Hold a grip on the bars to make sure the body is firmly in place. Bend your legs bringing the weight up, go slowly back. During the exercise the body should not move, all work is done by the legs.</p>'
  },
  {
    name: 'Leg Curls (sitting)',
    description: ''
  },
  {
    name: 'Leg Curls (standing)',
    description: ''
  },
  {
    name: 'Leg Extension',
    description: '<p>Seated Leg Extension Machine</p>'
  },
  {
    name: 'Leg Presses (narrow)',
    description: '<p>The exercise is very similar to the wide leg press:</p>\n<p>Sit on the machine and put your feet on the platform so far apart  that you could just put another foot in between them. The feet are parallel and point up.</p>\n<p>Lower the weight so much, that the knees form a right angle. Push immediately the platform up again, without any pause. When in the lower position, the knees point a bit outwards and the movement should be always fluid.</p>'
  },
  {
    name: 'Leg Presses (wide)',
    description: '<p>Sit on the machine and put your feet on the platform, a bit more than shoulder wide. The feet are turned outwards by a few degrees.</p>\n<p>Lower the weight so much, that the knees form a right angle. Push immediately the platform up again, without any pause. When in the lower position, the knees point a bit outwards and the movement should be always fluid.</p>'
  },
  {
    name: 'Leg Press on Hackenschmidt Machine',
    description: ''
  },
  {
    name: 'Leg Raises, Lying',
    description: '<p>Lay down on a bench and hold onto the recliner with your hands to keep you stable. Hold your legs straight and lift them till they make an angle of about 45°. Make a short pause of 1 sec. and go slowly down to the initial position. To increase the intensity you can make a longer pause of 7 sec. every 5th time.</p>'
  },
  {
    name: 'Leg Raises, Standing',
    description: '<p>Put your forearms on the pads on the leg raise machine, the body is hanging freely. Lift now your legs with a fast movement as high as you can, make a short pause of 1sec at the top, and bring them down again. Make sure that during the exercise your body does not swing, only the legs should move.</p>'
  },
  {
    name: 'Leverage Machine Chest Press',
    description: '<p>Be sure to adjust seat height so that the handles are towards the bottom of your pectorals.</p>'
  },
  {
    name: 'Leverage Machine Iso Row',
    description: '<p>Adjust seat height so that the handles are at the bottom of your pectorals or just below.</p>'
  },
  {
    name: 'L Hold',
    description: '<p>Hold the L position for as long as possible</p>'
  },
  {
    name: 'Long-Pulley (low Row)',
    description: '<p>Sit down, put your feet on the supporting points and grab the bar with a wide grip. Pull the weight with a rapid movement towards your belly button, not upper. Keep your arms and elbows during the movement close to your body. Your shoulders are pulled together. Let the weight slowly down till your arms are completely stretched.</p>'
  },
  {
    name: 'Long-Pulley, Narrow',
    description: '<p>The exercise is the same as the regular long pulley, but with a narrow grip:</p>\n<p>Sit down, put your feet on the supporting points and grab the bar with a wide grip. Pull the weight with a rapid movement towards your belly button, not upper. Keep your arms and elbows during the movement close to your body. Your shoulders are pulled together. Let the weight slowly down till your arms are completely stretched.</p>'
  },
  {
    name: 'Low Box Squat - Wide Stance',
    description: '<p>Unrack the bar and set your stance wide, beyond your hips.  Push your hips back and sit down to a box that takes you below parallel.  Sit completely down, do not touch and go.  Then explosively stand up.  Stay tight in your upper back and torso throughout the movement.</p>'
  },
  {
    name: 'Lying Rotator Cuff Exercise',
    description: '<p>This is an excercise for problems with the levator muscles. Primary  Infraspinatus, secondary Teres Minor.</p>\n<p>Lying on side. Keep elbow on waist and in 90 dgr angle. Rotate towards stomach. Add weight as fit.</p>'
  },
  {
    name: 'MGM Machine',
    description: ''
  },
  {
    name: 'Military Press',
    description: '<p>The military press is a variation of the overhead press weight training exercise using very strict form and no pre-movement momentum.The military press targets the deltoid muscles in the shoulders as well as the triceps. Additionally, it works the core and legs, which the lifter uses to help stabilize the weight.The lift begins with the lifter standing and the barbell on the anterior deltoids. The lifter then raises the barbell overhead by pressing the palms of the hands against the underside of the barbell.</p>'
  },
  {
    name: 'Military Press',
    description: "<p>On an SZ-bar grip your hands on the outside of each bend and stand with your arms straight down, palms facing your legs. Pull the bar (bending your arms at the elbow) to your chest, and the push the bar above your head (arms as straight as possible). Return the bar to your chest by dropping your arms at the elbows. Return the bar to it's origional position (stand with your arms straight down, palms facing your legs.)</p>"
  },
  {
    name: 'Negative Crunches',
    description: "<p>Sit yourself on the decline bench and fix your legs. Cross your arms over the chest and bring with a rolling movement your upper body up, go now without a pause and with a slow movement down again. Don't let your head move during the exercise.</p>"
  },
  {
    name: 'Overhand Cable Curl',
    description: '<p>Hands at shoulder height, curl arms in toward head, then back out.</p>'
  },
  {
    name: 'Overhead Squat',
    description: '<p>The barbell is held overhead in a wide-arm snatch grip; however, it is also possible to use a closer grip if balance allows.</p>'
  },
  {
    name: 'Pause Bench',
    description: '<p>Lower the bar to your chest and pause (but do not rest) there for 2 seconds. Press back up. use the same weight you would on bench press, but perform only single reps. Total the number of reps you did in one set of bench press (if you did 3 sets of 8 do 8 sinlge pause bench reps.</p>'
  },
  {
    name: 'Pendelay Rows',
    description: '<p>Back excercise with a barbell with a starting position which is in a bent over position with the back paralell to the ground. The barbell is on the ground at chest level.For the movement grab the barbell at shoulder width grip and pull towards your chest without losing the bent over position and without moving anything but your arms</p>'
  },
  {
    name: 'Perfect Push Up',
    description: '<p>Push up with perfect push up</p>'
  },
  {
    name: 'Pike Push Ups',
    description: '<p>Push Up performed from a pike position (optional to have feet elevated).</p>'
  },
  {
    name: 'Pistol Squat',
    description: '<p>One legged squat</p>'
  },
  {
    name: 'Plank',
    description: '<p>Get into a position on the floor supporting your weight on your forearms and toes. Arms are bent and directly below the shoulder. </p>\n<p>Keep your body straight at all times and hold this position as long as possible. To increase difficulty an arm or leg can be raised while performing this exercise.  </p>'
  },
  {
    name: 'Power Clean',
    description: '<p>Olympic weight lifting</p>'
  },
  {
    name: 'Preacher Curls',
    description: '<p> Place the EZ curl bar on the rest handles in front of the preacher bench. Lean over the bench and grab the EZ curl bar with palms up. Sit down on the preacher bench seat so your upper arms rest on top of the pad and your chest is pressed against the pad. Lower the weight until your elbows are extended and arms are straight. Bring the weights back up to the starting point by contracting biceps. Repeat</p>'
  },
  {
    name: 'Prone Scapular Retraction - Arms at Side',
    description: '<p>Lying on stomach with head on towel.</p>\n<p>Stretch arms straight out to your sides.</p>\n<p>Slowly lift your arms, pulling your shoulderblades together, hold for 3 seconds.</p>\n<p> </p>'
  },
  {
    name: 'Pull-ups',
    description: '<p>Grab the pull up bar with a wide grip, the body is hanging freely. Keep your chest out and pull yourself up till your chin reaches the bar or it touches your neck, if you want to pull behind you. Go with a slow and controlled movement down, always keeping the chest out.</p>'
  },
  {
    name: 'Pull Ups on Machine',
    description: ''
  },
  {
    name: 'Push Press',
    description: '<p>olympic weight lifting</p>'
  },
  {
    name: 'Push Ups',
    description: '<p>Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat.</p>'
  },
  {
    name: 'Rack Deadlift',
    description: '<p>Deadlift to be done using a Smith machine or a free rack. Bar or barbell hould be just right under the knee cap level. Lift using the glutes and through the heels, then come back to starting postion with a control movement of 2 seconds.</p>\n<p>This exercise targets mainly the lower back and glutes.</p>'
  },
  {
    name: 'Rear Delt Raises',
    description: '<p>Seated on a bench bWith the dumbbells on the floor bend over at 45 Degrees and then slowly raise each dumbbell to shoulder height and hold for a couple seconds before lowering to the starting position. </p>\n<p> </p>'
  },
  {
    name: 'Reverse Bar Curl',
    description: '<p>Hold bar with reverse (or "overhand") grip, palms facing the floor.</p>'
  },
  {
    name: 'Reverse Grip Bench Press',
    description: '<p>Upper chest focuses exercise that also works triceps</p>'
  },
  {
    name: 'Reverse Plank',
    description: '<p>Plank with stomach towards ceiling</p>'
  },
  {
    name: 'Ring Dips',
    description: '<p>Dips peformed on gymnastic rings.</p>'
  },
  {
    name: 'Roman Chair',
    description: '<p>Crunches on roman chair</p>'
  },
  {
    name: 'Romanian Deadlift',
    description: '<p>DL from top to pos 2: https://www.youtube.com/watch?v=WtWtjViRsKo</p>'
  },
  {
    name: 'Rowing, Lying on Bench',
    description: ''
  },
  {
    name: 'Rowing, Seated',
    description: ''
  },
  {
    name: 'Rowing, T-bar',
    description: "<p>The execution of this exercise is very similar to the regular bent over rowing, only that the bar is fixed here.</p>\n<p>Grab the barbell with a wide grip (slightly more than shoulder wide) and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chest's out during the whole exercise. Pull now the barbell with a fast movement towards your belly button, not further up. Go slowly down to the initial position. Don't swing with your body and keep your arms next to your body.</p>"
  },
  {
    name: 'Run',
    description: '<p>Running or jogging outside in a park, on the tracks,...</p>'
  },
  {
    name: 'Run - Interval Training ',
    description: '<p>Run and do some interval trainings such as hill repat, fartlek,..</p>'
  },
  {
    name: 'Run - Treadmill',
    description: '<p>Run on a treadmill</p>'
  },
  {
    name: 'Seated Triceps Press',
    description: '<p>Sit down on a back (better with back support). Take a dumbbell firmly with both hands and hold it with extended arms over your head. With your palms facing upward and holding the weight of the dumbbell, slowly lower the weight behind your head.</p>\n<p> </p>'
  },
  {
    name: 'Shotgun Row',
    description: '<ol>\n<li>Attach a single handle to a low cable.</li>\n<li>After selecting the correct weight, stand a couple feet back with a wide-split stance. Your arm should be extended and your shoulder forward. This will be your starting position.</li>\n<li>Perform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist, turning the palm upward as you go.</li>\n<li>After a brief pause, return to the starting position.</li>\n</ol>'
  },
  {
    name: 'Shoulder Press, Barbell',
    description: "<p>Sit on a bench, the back rest should be almost vertical. Take a barbell with a shoulder wide grip and bring it up to chest height. Press the weight up, but don't stretch the arms completely. Go slowly down and repeat.</p>"
  },
  {
    name: 'Shoulder Press, Dumbbells',
    description: "<p>Sit on a bench, the back rest should be almost vertical. Take two dumbbells and bring them up to shoulder height, the palms and the elbows point during the whole exercise to the front. Press the weights up, at the highest point they come very near but don't touch. Go slowly down and repeat.</p>"
  },
  {
    name: 'Shoulder Press, on Machine',
    description: ''
  },
  {
    name: 'Shoulder Press, on Multi Press',
    description: "<p>The exercise is basically the same as with a free barbell:</p>\n<p>Sit on a bench, the back rest should be almost vertical. Take a bar with a shoulder wide grip and bring it down to chest height. Press the weight up, but don't stretch the arms completely. Go slowly down and repeat.</p>"
  },
  {
    name: 'Shrugs, Barbells',
    description: "<p>Take a barbell and stand with a straight body, the arms are hanging freely in front of you. Lift from this position the shoulders as high as you can, but don't bend the arms during the movement. On the highest point, make a short pause of 1 or 2 seconds before returning slowly to the initial position.</p>\n<p>When training with a higher weight, make sure that you still do the whole movement!</p>"
  },
  {
    name: 'Shrugs, Dumbbells',
    description: "<p>Stand with straight body, the hands are hanging freely on the side and hold each a dumbbell. Lift from this position the shoulders as high as you can, but don't bend the arms during the movement. On the highest point, make a short pause of 1 or 2 seconds before returning slowly to the initial position.</p>\n<p>When training with a higher weight, make sure that you still do the whole movement!</p>"
  },
  {
    name: 'Side Crunch',
    description: '<p>Hold weight in one hand. Bend side ways to the knee. Pull upo to upright position using your obliquus.</p>'
  },
  {
    name: 'Side Dumbbell Trunk Flexion',
    description: '<p>AKA dumbbell side bends. Stand in line with the hips with slightly bent knees, maintain the natural curvature of the spine, hand stretched by the body, grip the barbell with one hand. <em> </em>Make slow and controlled torso side flexions till you reach the angle of approximately 45°.</p>'
  },
  {
    name: 'Side-lying External Rotation',
    description: '<p>With a weight in one hand, lie on your side opposite the weight. Keep your knees slightly bent. Hold your elbow against your side, and extend your upper arm straight ahead of you. While continuing to hold your elbow against your side, rotate your upper arm 90 degrees upwards.</p>\n<p>It is helpful to place a towel under your armpit to help with the form on this exercise. Placing a support under your head for the duration of the exercise is also a good idea.</p>'
  },
  {
    name: 'Side Plank',
    description: '<p>Works your obliques and helps stabilize your spine. Lie on your side and support your body between your forearm and knee to your feet.</p>'
  },
  {
    name: 'Side Raise',
    description: '<p>Stand up or sit , keep both weights in front against legs or at side. Keep arms at around a 90 degree angle. Lift elbows up slowly and squeese traps when at topmost position. Lower the weights slowly back to starting position.</p>\n<p>2 seconds up, 2 seconds down</p>'
  },
  {
    name: 'Side to Side Push Ups',
    description: '<p>-start in push up position</p>\n<p>-lean the body weight to the right side, and complete a push up with the chest over the right hand</p>\n<p>-come back to the centered position</p>\n<p>-on rep 2, lean to the left side</p>'
  },
  {
    name: 'Single-arm Preacher Curl',
    description: "<p>Sit on the preacher curl bench and perform a bicep curl with a dumbbell in one hand. Your other hand can be at rest, or beneath your curling arm's elbow.</p>"
  },
  {
    name: 'Sitting Calf Raises',
    description: '<p>Sit on a bench for calf raises and check that the feet are half free and that you can completely stretch the calf muscles down. Pull your calves up, going as far (up) as you can. Make at the highest point a short pause of 1 or 2 seconds and go down.</p>'
  },
  {
    name: 'Sit-ups',
    description: '<p>Sit on a mat, your calves are resting on a bench, the knees make a right angle. Hold your hands behind your neck. Go now up with a rolling movement of your back, you should feel how the individual vertebrae lose contact with the mat. At the highest point, contract your abs as much as you can and hold there for 2 sec. Go now down, unrolling your back.</p>\n<p> </p>'
  },
  {
    name: 'Skipping - Standard',
    description: '<p>Do a single, double footed jump for each swing of the rope.</p>\n<p>Work on a smooth, rhythmical movement, bouncing lightly on the balls of your feet.</p>'
  },
  {
    name: 'Smith Machine Close-grip Bench Press',
    description: '<p>Perform a standard bench press on the smith machine, but have your hands on the bar about shoulder width apart, and keep your elbows close to your body.</p>'
  },
  {
    name: 'Snach',
    description: "<p>Stand with your feet at hip width and your shins against the bar. Grasp the bar at double shoulder width and, keeping your lower back flat, drive your heels into the floor to begin lifting the bar. When it's above your knees, explosively extend your hips and shrug your shoulders. Let the momentum carry the weight overhead.</p>"
  },
  {
    name: 'Speed Deadlift',
    description: '<p>Deadlift with short (&lt;1min) rest between sets.</p>'
  },
  {
    name: 'Splinter Sit-ups',
    description: "<p>Lie on your back with your legs straight and arms at your sides, keeping your elbows bent at 90 degrees. As you sit up, twist your upper body to the left and bring your left knee toward your right elbow while you swing your left arm back. Lower your body to the starting position, and repeat to your right. That's 1 rep.</p>"
  },
  {
    name: 'Squat Jumps',
    description: '<p>Jump wide, then close</p>'
  },
  {
    name: 'Squats',
    description: '<p>Make sure you have put the barbell at a height where you can comfortably take it out and put it back in. Take it out and make yourself ready:</p>\n<ul>\n<li>The bar is somewhat lower than your shoulders</li>\n<li>The feet are quite apart and point out</li>\n<li>The head is in your neck and looks up</li>\n<li>The chest is out</li>\n</ul>\n<p>Go now slowly down, till your thighs are parallel with the floor, not lower. The knees point outwards, your butt, out. Make a small pause of 1 second and with as much energy as you can, push the weight up. Make a pause of 2 seconds and repeat.</p>'
  },
  {
    name: 'Standing Calf Raises',
    description: "<p>Get onto the calf raises machine, you should able to completely push your calves down. Stand straight, don't make a hollow back and don't bend your legs. Pull yourself up as high as you can. Make a small pause of 1 - 2 seconds and go slowly down.</p>"
  },
  {
    name: 'Standing Rope Forearm',
    description: '<p>Grab a wrist roller tool with both hands while standing with your feet about shoulder width apart. If your gym does not have a wrist roller tool, you can easily put one together. All you need is a 5 or 10 pound weight plate, a strong thin rope about 3 feet long and a 6-8 inch stick or bar. Securely fasten the rope to the middle of the bar/stick and tie the other end of the rope to the weight plate. To begin this exercise, grab the bar/stick with both hands using an overhand grip. Extend both arms straight out in front of you, parallel to the floor. Next, roll the weight up from the floor by rapidly twisting the bar/stick with your hands and wrists. Once the weight reaches the top, slowly lower the plate back to the floor by reversing the motion of your hands and wrists. Repeat (if you can!).</p>'
  },
  {
    name: 'Stationary Bike',
    description: '<p>Ride a Stationary Bike with various tensions.</p>'
  },
  {
    name: 'Stiff-legged Deadlifts',
    description: '<ul>\n<li>Keep legs straight</li>\n<li>Keep back straight</li>\n</ul>'
  },
  {
    name: 'Straight-arm Pull Down (bar Attachment)',
    description: '<p>Use the straight bar attachment on a high pulley. Grasp the two ends of the bar with your palms facing downward and your arms straight out in front of you. Pull your hands down towards your hips, while keeping your arms straight, then raise them back up to the starting position.</p>'
  },
  {
    name: 'Straight-arm Pull Down (rope Attachment)',
    description: '<p>Use the rope attachment on a high pulley. Grasp the two ends of the rope with your arms straight out in front of you. Pull your hands down towards your hips, while keeping your arms straight, then raise them back up to the starting position.</p>'
  },
  {
    name: 'Superman',
    description: '<p>Lay flat on your stomach with your arms extended in front of you on the ground as your legs are lying flat. Lift both your arms and legs at the same time, as if you were flying, and contract the lower back. Make sure that you are breathing and, depending on your fitness level, hold the movement for at least two to five seconds per repetition.</p>'
  },
  {
    name: 'Thruster',
    description: '<ol>\n<li>Start by doing a front squat</li>\n<li>At the top position, push the bar above your head (similar to a press)</li>\n<li>Lower the bar to the shoulders</li>\n</ol>'
  },
  {
    name: 'Tricep Dumbbell Kickback',
    description: '<ol>\n<li>Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position.</li>\n<li>Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm.</li>\n<li>After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position.</li>\n<li>Repeat the movement for the prescribed amount of repetitions.</li>\n</ol>\n<p><strong>Variations:</strong> This exercise can be executed also one arm at a time much like the one arm rows are performed.</p>\n<p>Also, if you like the one arm variety, you can use a low pulley handle instead of a dumbbell for better peak contraction. In this case, the palms should be facing up (supinated grip) as opposed to the torso (neutral grip).</p>'
  },
  {
    name: 'Triceps Bench Press One Barbell',
    description: '<p>Činka v jedné ruce v úrovni ramene. Zvedat do výšky napnuté paže a zpět. Provádět pomalu.</p>'
  },
  {
    name: 'Triceps Dips',
    description: '<p>lift on parallel bars hold for 1 second, and lower slowly and control for 4 seconds, then come back with no rest (tempo: 4010)</p>'
  },
  {
    name: 'Triceps Extensions on Cable',
    description: "<p>Grab the cable, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows don't move during the exercise. Rotate your hands outwards at the very end and go back to the initial position without pause.</p>"
  },
  {
    name: 'Triceps Extensions on Cable With Bar',
    description: "<p>Grab the bar, stand with your feet shoulder wide, keep your back straight and lean forward a little. Push the bar down, making sure the elbows don't move during the exercise. Without pause go back to the initial position.</p>"
  },
  {
    name: 'Triceps Machine',
    description: '<p>.</p>'
  },
  {
    name: 'Trunk Rotation With Cable ',
    description: '<p>Seated trunk rotation with cable </p>'
  },
  {
    name: 'Turkish Get-Up',
    description: '<p>Starting on back, move to the standing position with dumbbell in one hand.  Switch hands between reps.</p>'
  },
  {
    name: 'Underhand Lat Pull Down',
    description: '<p>Grip the pull-down bar with your palms facing you and your hands closer than shoulder-width apart. Lean back slightly and keep your back straight. Pull the bar down towards your chest, pulling your shoulders back slightly at the end of the motion.</p>'
  },
  {
    name: 'Upper Body',
    description: '<p>Full workout of the upper arms body n chest. Focusing on the core</p>'
  },
  {
    name: 'Upper External Oblique',
    description: '<p>Exercise for upper external oblique muscles</p>'
  },
  {
    name: 'Upright Row, on Multi Press',
    description: '<p>The movements are basically the same as with an SZ-bar, but you use the bar on the multi press:</p>\n<p>Stand straight, your feet are shoulder-width apart. Hold the bar with an overhand grip on your thighs, the arms are stretched. Lift the bar close to the body till your chin. The elbows point out so that at the highest point they form a V. Make here a short pause before going slowly down and repeating the movement.</p>'
  },
  {
    name: 'Upright Row, SZ-bar',
    description: '<p>Stand straight, your feet are shoulder-width apart. Hold the SZ-bar with an overhand grip on your thighs, the arms are stretched. Lift the bar close to the body till your chin. The elbows point out so that at the highest point they form a V. Make here a short pause before going slowly down and repeating the movement.</p>'
  },
  {
    name: 'Upright Row w/ Dumbbells',
    description: '<p>Feet apart at shoulder width. Nice and Slow!</p>'
  },
  {
    name: 'V-Bar Pulldown',
    description: '<p>Pulldowns using close grip v-bar.</p>'
  },
  {
    name: 'Wall Handstand',
    description: '<p>Handstand against a wall for support (chest facing wall).</p>'
  },
  {
    name: 'Wall Pushup',
    description: '<p>Pushup against a wall</p>'
  },
  {
    name: 'Wall Squat',
    description: '<p>Find a nice flat piece of wall and stand with your back leaning against the wall. Slowly slide down the wall while moving your feet away from it, until your thighs are parallel to the ground and both your knees and your hips are bent at a 90° angle. Cross your arms in front of your chest and hold this position for 30 seconds.</p>\n<p>Variant: put a big inflated rubber ball (like a small basketball) between your knees and squeeze the ball while holding the squat position</p>'
  },
  {
    name: 'Weighted Step',
    description: "<p>Box step-ups w/ barbell, 45's on each side</p>"
  },
  {
    name: 'Weighted Step-ups',
    description: "<p>box step ups w/ barbell and 45's on each side</p>"
  },
  {
    name: 'Wide-grip Pulldown',
    description: '<p>Lat pulldowns with a wide grip on the bar.</p>'
  },
  {
    name: 'Z Curls',
    description: '<p>-Perform a traditional dumbbell biceps curl, pausing at the top of the motion.</p>\n<p>-Twist your hands until your palms are facing away from your shoulders (in reverse curl position).  Basically, twist your right wrist inwards to the left, and vice versa.</p>\n<p>-In a slow, controlled movement, lower the Dbells with your palms facing the ground.  At the bottom of the motion, twist your wrists back into the traditional curl grip (palms facing up, towards shoulder).</p>\n<p>-That is 1 rep</p>\n<p> </p>'
  }
];

const measurements = [{
  weight: [
    { date: getTime(new Date('2018-02-23')), value: 150 },
    { date: getTime(new Date('2018-02-24')), value: 150 },
    { date: getTime(new Date('2018-02-25')), value: 150 },
    { date: getTime(new Date('2018-02-26')), value: 150 },
    { date: getTime(new Date('2018-02-27')), value: 150 },
    { date: getTime(new Date('2018-02-28')), value: 150 },
    { date: getTime(new Date('2018-03-01')), value: 151 },
    { date: getTime(new Date('2018-03-02')), value: 151 },
    { date: getTime(new Date('2018-03-03')), value: 151 },
    { date: getTime(new Date('2018-03-04')), value: 149 },
    { date: getTime(new Date('2018-03-05')), value: 151 },
    { date: getTime(new Date('2018-03-06')), value: 152 },
    { date: getTime(new Date('2018-03-07')), value: 152 },
    { date: getTime(new Date('2018-03-08')), value: 152 },
    { date: getTime(new Date('2018-03-09')), value: 152 },
    { date: getTime(new Date('2018-03-10')), value: 152 },
    { date: getTime(new Date('2018-03-11')), value: 152 },
    { date: getTime(new Date('2018-03-12')), value: 152 },
    { date: getTime(new Date('2018-03-13')), value: 153 },
    { date: getTime(new Date('2018-03-14')), value: 153 },
    { date: getTime(new Date('2018-03-15')), value: 152 },
    { date: getTime(new Date('2018-03-16')), value: 153 },
    { date: getTime(new Date('2018-03-18')), value: 153 },
    { date: getTime(new Date('2018-03-19')), value: 153 },
    { date: getTime(new Date('2018-03-20')), value: 153 },
    { date: getTime(new Date('2018-03-21')), value: 153 },
    { date: getTime(new Date('2018-03-22')), value: 153 },
    { date: getTime(new Date('2018-03-23')), value: 153 },
    { date: getTime(new Date('2018-03-24')), value: 153 }
  ],
  calorie: [
    { date: getTime(new Date('2018-02-23')), value: 2000 },
    { date: getTime(new Date('2018-02-24')), value: 2200 },
    { date: getTime(new Date('2018-02-25')), value: 2150 },
    { date: getTime(new Date('2018-02-26')), value: 2133 },
    { date: getTime(new Date('2018-02-27')), value: 2163 },
    { date: getTime(new Date('2018-02-28')), value: 2122 },
    { date: getTime(new Date('2018-03-01')), value: 2133 },
    { date: getTime(new Date('2018-03-02')), value: 2533 },
    { date: getTime(new Date('2018-03-03')), value: 1903 },
    { date: getTime(new Date('2018-03-04')), value: 2200 },
    { date: getTime(new Date('2018-03-05')), value: 1800 },
    { date: getTime(new Date('2018-03-06')), value: 2300 },
    { date: getTime(new Date('2018-03-07')), value: 2133 },
    { date: getTime(new Date('2018-03-08')), value: 2222 },
    { date: getTime(new Date('2018-03-09')), value: 2311 },
    { date: getTime(new Date('2018-03-10')), value: 2000 },
    { date: getTime(new Date('2018-03-11')), value: 2233 },
    { date: getTime(new Date('2018-03-12')), value: 2332 },
    { date: getTime(new Date('2018-03-13')), value: 2211 },
    { date: getTime(new Date('2018-03-14')), value: 2132 },
    { date: getTime(new Date('2018-03-15')), value: 2403 },
    { date: getTime(new Date('2018-03-16')), value: 1900 },
    { date: getTime(new Date('2018-03-18')), value: 1950 },
    { date: getTime(new Date('2018-03-19')), value: 2150 },
    { date: getTime(new Date('2018-03-20')), value: 2250 },
    { date: getTime(new Date('2018-03-21')), value: 2013 },
    { date: getTime(new Date('2018-03-22')), value: 2000 },
    { date: getTime(new Date('2018-03-23')), value: 2100 },
    { date: getTime(new Date('2018-03-24')), value: 2321 }
  ],
  protein: [
    { date: getTime(new Date('2018-02-23')), value: 200 },
    { date: getTime(new Date('2018-02-23')), value: 200 },
    { date: getTime(new Date('2018-02-24')), value: 250 },
    { date: getTime(new Date('2018-02-24')), value: 250 },
    { date: getTime(new Date('2018-02-25')), value: 230 },
    { date: getTime(new Date('2018-02-25')), value: 230 },
    { date: getTime(new Date('2018-02-26')), value: 220 },
    { date: getTime(new Date('2018-02-26')), value: 220 },
    { date: getTime(new Date('2018-02-27')), value: 216 },
    { date: getTime(new Date('2018-02-27')), value: 216 },
    { date: getTime(new Date('2018-02-28')), value: 222 },
    { date: getTime(new Date('2018-02-28')), value: 222 },
    { date: getTime(new Date('2018-03-01')), value: 233 },
    { date: getTime(new Date('2018-03-01')), value: 233 },
    { date: getTime(new Date('2018-03-02')), value: 213 },
    { date: getTime(new Date('2018-03-02')), value: 213 },
    { date: getTime(new Date('2018-03-03')), value: 290 },
    { date: getTime(new Date('2018-03-03')), value: 290 },
    { date: getTime(new Date('2018-03-04')), value: 220 },
    { date: getTime(new Date('2018-03-04')), value: 220 },
    { date: getTime(new Date('2018-03-05')), value: 280 },
    { date: getTime(new Date('2018-03-05')), value: 280 },
    { date: getTime(new Date('2018-03-06')), value: 230 },
    { date: getTime(new Date('2018-03-06')), value: 230 },
    { date: getTime(new Date('2018-03-07')), value: 240 },
    { date: getTime(new Date('2018-03-07')), value: 240 },
    { date: getTime(new Date('2018-03-08')), value: 242 },
    { date: getTime(new Date('2018-03-08')), value: 242 },
    { date: getTime(new Date('2018-03-09')), value: 211 },
    { date: getTime(new Date('2018-03-09')), value: 211 },
    { date: getTime(new Date('2018-03-10')), value: 220 },
    { date: getTime(new Date('2018-03-10')), value: 220 },
    { date: getTime(new Date('2018-03-11')), value: 223 },
    { date: getTime(new Date('2018-03-11')), value: 223 },
    { date: getTime(new Date('2018-03-12')), value: 233 },
    { date: getTime(new Date('2018-03-12')), value: 233 },
    { date: getTime(new Date('2018-03-13')), value: 200 },
    { date: getTime(new Date('2018-03-13')), value: 200 },
    { date: getTime(new Date('2018-03-14')), value: 232 },
    { date: getTime(new Date('2018-03-14')), value: 232 },
    { date: getTime(new Date('2018-03-15')), value: 203 },
    { date: getTime(new Date('2018-03-15')), value: 203 },
    { date: getTime(new Date('2018-03-16')), value: 290 },
    { date: getTime(new Date('2018-03-16')), value: 290 },
    { date: getTime(new Date('2018-03-18')), value: 295 },
    { date: getTime(new Date('2018-03-18')), value: 295 },
    { date: getTime(new Date('2018-03-19')), value: 255 },
    { date: getTime(new Date('2018-03-19')), value: 255 },
    { date: getTime(new Date('2018-03-20')), value: 225 },
    { date: getTime(new Date('2018-03-20')), value: 225 },
    { date: getTime(new Date('2018-03-21')), value: 261 },
    { date: getTime(new Date('2018-03-21')), value: 261 },
    { date: getTime(new Date('2018-03-22')), value: 200 },
    { date: getTime(new Date('2018-03-22')), value: 200 },
    { date: getTime(new Date('2018-03-23')), value: 240 },
    { date: getTime(new Date('2018-03-23')), value: 240 },
    { date: getTime(new Date('2018-03-24')), value: 232 },
    { date: getTime(new Date('2018-03-24')), value: 232 }
  ],

  carbs: [{ date: getTime(new Date('2018-02-23')), value: 100 },
  { date: getTime(new Date('2018-02-24')), value: 150 },
  { date: getTime(new Date('2018-02-25')), value: 130 },
  { date: getTime(new Date('2018-02-26')), value: 120 },
  { date: getTime(new Date('2018-02-27')), value: 116 },
  { date: getTime(new Date('2018-02-28')), value: 122 },
  { date: getTime(new Date('2018-03-01')), value: 133 },
  { date: getTime(new Date('2018-03-02')), value: 113 },
  { date: getTime(new Date('2018-03-03')), value: 190 },
  { date: getTime(new Date('2018-03-04')), value: 120 },
  { date: getTime(new Date('2018-03-05')), value: 180 },
  { date: getTime(new Date('2018-03-06')), value: 130 },
  { date: getTime(new Date('2018-03-07')), value: 140 },
  { date: getTime(new Date('2018-03-09')), value: 111 },
  { date: getTime(new Date('2018-03-10')), value: 120 },
  { date: getTime(new Date('2018-03-11')), value: 123 },
  { date: getTime(new Date('2018-03-12')), value: 133 },
  { date: getTime(new Date('2018-03-13')), value: 100 },
  { date: getTime(new Date('2018-03-14')), value: 132 },
  { date: getTime(new Date('2018-03-15')), value: 203 },
  { date: getTime(new Date('2018-03-16')), value: 190 },
  { date: getTime(new Date('2018-03-17')), value: 190 },
  { date: getTime(new Date('2018-03-18')), value: 195 },
  { date: getTime(new Date('2018-03-19')), value: 155 },
  { date: getTime(new Date('2018-03-20')), value: 125 },
  { date: getTime(new Date('2018-03-21')), value: 161 },
  { date: getTime(new Date('2018-03-22')), value: 100 },
  { dte: getTime(new Date('2018-03-23')), value: 140 },
  { date: getTime(new Date('2018-03-24')), value: 132 }
  ],

  fat: [
    { date: getTime(new Date('2018-02-23')), value: 40 },
    { date: getTime(new Date('2018-02-24')), value: 50 },
    { date: getTime(new Date('2018-02-25')), value: 50 },
    { date: getTime(new Date('2018-02-26')), value: 60 },
    { date: getTime(new Date('2018-02-27')), value: 76 },
    { date: getTime(new Date('2018-02-28')), value: 52 },
    { date: getTime(new Date('2018-03-01')), value: 53 },
    { date: getTime(new Date('2018-03-02')), value: 43 },
    { date: getTime(new Date('2018-03-03')), value: 50 },
    { date: getTime(new Date('2018-03-04')), value: 60 },
    { date: getTime(new Date('2018-03-05')), value: 50 },
    { date: getTime(new Date('2018-03-06')), value: 40 },
    { date: getTime(new Date('2018-03-07')), value: 50 },
    { date: getTime(new Date('2018-03-08')), value: 52 },
    { date: getTime(new Date('2018-03-09')), value: 61 },
    { date: getTime(new Date('2018-03-10')), value: 60 },
    { date: getTime(new Date('2018-03-11')), value: 73 },
    { date: getTime(new Date('2018-03-12')), value: 73 },
    { date: getTime(new Date('2018-03-13')), value: 70 },
    { date: getTime(new Date('2018-03-14')), value: 52 },
    { date: getTime(new Date('2018-03-15')), value: 43 },
    { date: getTime(new Date('2018-03-16')), value: 50 },
    { date: getTime(new Date('2018-03-18')), value: 65 },
    { date: getTime(new Date('2018-03-19')), value: 55 },
    { date: getTime(new Date('2018-03-20')), value: 65 },
    { date: getTime(new Date('2018-03-21')), value: 61 },
    { date: getTime(new Date('2018-03-22')), value: 50 },
    { date: getTime(new Date('2018-03-23')), value: 40 },
    { date: getTime(new Date('2018-03-24')), value: 52 }
  ],

  arm: [
    { date: getTime(new Date('2018-02-25')), value: 18 },
    { date: getTime(new Date('2018-02-26')), value: 18 },
    { date: getTime(new Date('2018-02-27')), value: 18 },
    { date: getTime(new Date('2018-02-28')), value: 18.1 },
    { date: getTime(new Date('2018-03-01')), value: 18.3 },
    { date: getTime(new Date('2018-03-02')), value: 18.3 },
    { date: getTime(new Date('2018-03-03')), value: 18.3 },
    { date: getTime(new Date('2018-03-04')), value: 18.3 },
    { date: getTime(new Date('2018-03-05')), value: 18.4 },
    { date: getTime(new Date('2018-03-06')), value: 18.4 },
    { date: getTime(new Date('2018-03-07')), value: 18.4 },
  ],
  waist: [
    { date: getTime(new Date('2018-02-25')), value: 28 },
    { date: getTime(new Date('2018-02-26')), value: 28 },
    { date: getTime(new Date('2018-02-27')), value: 28 },
    { date: getTime(new Date('2018-02-28')), value: 28.1 },
    { date: getTime(new Date('2018-03-01')), value: 28.3 },
    { date: getTime(new Date('2018-03-02')), value: 28.3 },
    { date: getTime(new Date('2018-03-03')), value: 28.3 },
    { date: getTime(new Date('2018-03-04')), value: 28.3 },
    { date: getTime(new Date('2018-03-05')), value: 28.4 },
    { date: getTime(new Date('2018-03-06')), value: 28.4 },
    { date: getTime(new Date('2018-03-07')), value: 28.4 }],
  neck: [
    { date: getTime(new Date('2018-02-25')), value: 22 },
    { date: getTime(new Date('2018-02-26')), value: 22 },
    { date: getTime(new Date('2018-02-27')), value: 23 },
    { date: getTime(new Date('2018-02-28')), value: 23.1 },
    { date: getTime(new Date('2018-03-01')), value: 23.1 },
    { date: getTime(new Date('2018-03-02')), value: 23.3 },
    { date: getTime(new Date('2018-03-03')), value: 23.3 },
    { date: getTime(new Date('2018-03-04')), value: 23.5 },
    { date: getTime(new Date('2018-03-05')), value: 23.5 },
    { date: getTime(new Date('2018-03-06')), value: 23.6 },
    { date: getTime(new Date('2018-03-07')), value: 23.6 },
    { date: getTime(new Date('2018-03-08')), value: 23.7 },
    { date: getTime(new Date('2018-03-09')), value: 23.7 },
    { date: getTime(new Date('2018-03-10')), value: 23.8 },
    { date: getTime(new Date('2018-03-11')), value: 23.8 }
  ],
  user_id: 1
}];

module.exports = { users, dates, foods, goals, activities, plans, exercises, measurements };

