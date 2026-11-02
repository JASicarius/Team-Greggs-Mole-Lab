/*
Here are all the functions you may want to change.
Read the coursework spec carefully and the in-line comments in the functions to understand what is needed here
*/
let chromeBugWorkaround = true;

const getRandVal = function () {
  return Math.random() * 2 - 1;
};

let lastPos = { x: 0, y: 0 }; // Remembers the location the mole was last, for changes I'll add to getMolePosition for increased difficulty.

const getMolePosition = function () {
  //function to generate a new location for the mole
  //function returns an object with fields x and y i.e. {x:<val>, y:<val>}
  //function should only return values between -1 and 1 for both fields
  //remember that the center is at 0,0, consider this to prevent overlap

  console.warn(
    "|========> getMolePosition(): Controls the position the mole appears at"
  );
  console.warn("|==============> x is between -1 and 1 and y is between -0.73 and 0.73");

  const minJump = 0.6; // Added this for a minimum distance check where the mole must move each time.

  let posl
  do {
    pos = { x: getRandVal(), y: 0.73 * getRandVal() };
  } while (Math.hypot(pos.x - lastPos.x, pos.y - lastPos.y) < minJump);

  lastPos = pos;
  return pos;
};



const getMoleSize = function () {
  //function to generate a scale / size of the mole
  //function should return a single value between 1 and 2
  //you can use a discrete number of values for scale (e.g. three values 1.25, 1.5, 2)

  console.warn(
    "|========> getMoleSize(): Controls the size of the mole"
  );
  console.warn("|==============> returned value needs to be between 1 and 2");

  //Currently the function randomly returns one of three values: 1, 1.25, 1.5
  return [1, 1.25, 1.5][Math.floor(Math.random() * 3)];
};

const getTimeout = function () {
  //function that generates the time available for the user to click on the mole
  //function returns a value in milliseconds
  
  console.warn("|:========> Controls the amount of time the mole appears for");
  console.warn(
    "|==============> returned value needs to be a 4-5 digit number as this represents milliseconds"
  );

  //Currently the function returns random values
  return Math.floor(Math.random() * 2000);
};

const getCSVDataLine = function (obj, pid) {
  //function that converts each log entry into a single comma separated string
  //you are expected to convert all timestamps into computed values,
  //e.g. difference between rndDelayEnd and  userClickMole is the time taken to complete the trial
  //currently these are only saved as raw timestamps.

  console.warn("|:========> Controls the data logged to the CSV file ");
  console.warn(
    "|==============> returns a single string which is comma-separated values"
  );

  //Currently the function returns raw timestamps only as a csv string
  return [
    pid,
    obj.tid,
    obj.startTS,
    obj.rndDelayStart,
    obj.rndDelay,
    obj.rndDelayEnd,
    obj.moleStats,
    obj.userMoveStart,
    obj.userEnterMole,
    obj.userClickMole,
    obj.hitSuccess,
  ].join(",");
};
