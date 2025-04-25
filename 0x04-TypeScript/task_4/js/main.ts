/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
    // Export constants as required
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    export const cTeacher: Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10
    };

    // For Cpp Subject
    console.log("C++");
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());

    // For Java Subject
    console.log("Java");
    java.setTeacher(cTeacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());

    // For React Subject
    console.log("React");
    react.setTeacher(cTeacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}

// Export the constants at the top level
export const cpp = Subjects.cpp;
export const java = Subjects.java;
export const react = Subjects.react;
export const cTeacher = Subjects.cTeacher;