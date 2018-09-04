"use strict";

const Service = function() {
    this.names = [];
    this.classmates = [
        "Adrean",
        "Ashley",
        "Ben",
        "Chelsye",
        "Jalen",
        "John",
        "Johnathan",
        "Katie",
        "Ken",
        "Matty",
        "Sydney",
        "Taz",
        "Tremell",
        "Zavier"
    ];
    this.getStudents = function() {
        return this.classmates;
    };
    this.setStudents = function(newStudent) {
        this.classmates.unshift(newStudent);
        document.querySelector("input").value = ""; // this line is optional. It just clears the input upon submission
    };
}


app.service("Service", Service)