// Object in JavaScript is similar to array but it is more complex than array.
// Object is a collection of properties.
// Object is a collection of key value pairs.
// Object is a collection of methods.
// Object is a collection of functions.
// Object is a collection of objects.

var assistantManager = {
    movement:3,
    socialSkills: 30,
    technicalSkills: 50,
    communicationSkills: 40,
    leadershipSkills: 20,
    managementSkills: 30,
    decisionMakingSkills: 40,
    problemSolvingSkills: 50,
    timeManagementSkills: 60,
    teamBuildingSkills: 70,
    streetSmarts: 80,
    health: 40
};

//calling the object
console.log(assistantManager);

//adding a property to the object
assistantManager.salary = 100000;
console.log(assistantManager);

//accessing a property of the object
console.log(assistantManager.salary);


//Creating the object using brackets notation
var assistantManager = {};
assistantManager["movement"] = 3;
assistantManager["socialSkills"] = 30;
assistantManager["technicalSkills"] = 50;
assistantManager["communicationSkills"] = 40;
console.log(assistantManager);

//accessing the property of the object using brackets notation
console.log(assistantManager["movement"]);


//using array to create an object
var assistantManager = ["speed", "socialSkills", "technicalSkills", "communicationSkills"];
var manager ={
    speed:3,
    socialSkills:30,
    technicalSkills:50,
    communicationSkills:40
};
console.log(manager);
