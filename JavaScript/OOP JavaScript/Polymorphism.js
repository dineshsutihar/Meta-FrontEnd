//Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

/*

So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

*/

//The above concepts can be coded in JavaScript as follows:

const bycicle = {
    bell: function() {
        return "ring, ring! Watch out, please!";
    }
};
const door = {
    bell: function() {
        return "ring, ring! Who's there?";
    }
};

//Now, let's ring the bell on the bicycle:
bycicle.bell(); // "ring, ring! Watch out, please!"
//And now, let's ring the bell on the door:
door.bell(); // "ring, ring! Who's there?"

//The same method, bell(), is called on two different objects, bycicle and door. However, the result is different. This is polymorphism.

// we can conclude that the exact same name of the method can have the exact opposite intent, based on the object it is used for. 

// no wto make thsi truly polymorphic, i will add another function decleretion: 

function rangTheBell(thing) {
    console.log(thing.bell());
}

rangTheBell(bycicle); // "ring, ring! Watch out, please!"

rangTheBell(door); // "ring, ring! Who's there?"


//Another Example of Polymorphism in JavaScript
class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("I can't fly!");
    }
}
class Eagle extends Bird {
    useWings() {
        console.log("Flying high!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); //Flying high!
kingPenguin.useWings(); //I can't fly!

//thats all in this file.