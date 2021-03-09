name_of_the_student =[];
function submit() {
    var name1= document.getElementById("name_of_the_student1").value;
    var name2= document.getElementById("name_of_the_student2").value;
    var name3= document.getElementById("name_of_the_student3").value;
    var name4= document.getElementById("name_of_the_student4").value;
    name_of_the_student.push(name1);
    name_of_the_student.push(name2);
    name_of_the_student.push(name3);
    name_of_the_student.push(name4);
console.log (name_of_the_student);
document.getElementById("display_name").innerHTML=name_of_the_student ;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
   name_of_the_student.sort();
   console.log(name_of_the_student) ;
   document.getElementById("display_name").innerHTML=name_of_the_student;
} 