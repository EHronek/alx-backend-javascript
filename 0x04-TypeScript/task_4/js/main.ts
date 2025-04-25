/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Subjects {
    const cpp = new Cpp();
    const react = new React();
    const java = new Java();

    const cTeacher: Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10
    };

    // Cpp Subject
    cpp.setTeacher(cTeacher);
    console.log("C++");
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());

    // Java Subject
    console.log("Java");
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());

    // React Subject
    console.log("React");
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
