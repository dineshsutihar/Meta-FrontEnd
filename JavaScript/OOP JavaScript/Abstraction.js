//Abstraction is the process of hiding the implementation details and showing only functionality to the user.
/*Advantages of Data Abstraction
Helps the user to avoid writing low-level code.
Avoids code duplication and increases reusability.
Can change the internal implementation of a class independently without affecting the user.
Helps to increase the security of an application or program as only important details are provided to the user.*/

// Example of Abstraction in JavaScript

class ImplementationAbstraction {
    //method to set values of internal members
    setValues(name, age) {
        this.name = name;
        this.age = age;
    }
    //method to get values of internal members
    getValues() {
        console.log("Name is: " + this.name + " and age is: " + this.age);
    }

}

const obj=new ImplementationAbstraction();
obj.setValues("John",20);
obj.getValues(); //Name is: John and age is: 20