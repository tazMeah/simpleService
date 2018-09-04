"use strict";

const myComponent = {
    template: `
    <form>
    <input type="text" placeholder="add a student" ng-model="newStudent">
    <button type="submit" ng-click="$ctrl.addStudent(newStudent)">Add</button>
    </form>
    <li ng-repeat="person in $ctrl.classmates">{{person}}</li>
    `,
    controller: ["Service", function(Service){
        const vm = this;
        
        vm.classmates = Service.getStudents(); // Service.getStudents returns the list of students from service.js

        vm.addStudent = function(newStudent){
            Service.setStudents(newStudent);
        };
    }]
}

app.component("myComponent", myComponent)