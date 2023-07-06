/* -----------------------------------------
FULL VALIDATION FORM
------------------------------------------*/
//  1) iNPUT MASK (PHONE)

$(document).ready(function(){

    $(".phone").inputmask("(999) 999-999-9999",{"onincomplete":function(){
       $(".phone").val("");
       swal("Oops !", "Incomplete phone, Please review !","info");
       return false;
    }});
   
   });
   
   // 2) iNPUT VALIDATION
   // a) Frontend form
   
   function validateEmail(email){
       const regex =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       return regex.test(email);
   }
   function validateForm(){
       const name = document.getElementById("name").value;
       const age = document.getElementById("age").value;
       const phone = document.getElementById("phone").value;
       const email = document.getElementById("email").value;
       const address = document.getElementById("address").value;
       const experience = document.getElementById("experience").value;
       const skills = document.getElementById("skills").value;
       const file = document.getElementById("file").value;
   
       if(name == ""){
           swal("Opsss !","Name field cannot be empty.","error");
           return false;
       }
   
       else if(name == name.toUpperCase()){
           document.getElementById("name").value=" ";
           swal("Opsss !","Name field cannot be UPPERCASE.","info");
           return false;
       }
   
       else if(name.split(' ').length < 2){
           
           swal("Opsss !","Your fullname is REQUIRED","info");
           return false;
       }
   
       else if(age == ""){
           swal("Opsss !","Age field cannot be empty.","error");
           return false;
       }
   
       else if((age < 18) || (age > 50)){
           document.getElementById('age').value='';
           swal("Opsss !","Age only between 18 and 50 years old","info");
           return false;
       }
   
       else if(email == ""){
           swal("Opsss !","Email field cannot be empty.","error");
           return false;
       }
   
       else if(!(validateEmail(email))){
           document.getElementById('email').value='';
           swal("Opsss !","Put a valid email address.","error");
           return false;
       }
   
       else if(phone == ""){
           swal("Opsss !","Phone field cannot be empty.","error");
           return false;
       }
   
       else if(experience == ""){
           swal("Opsss !","Experience field cannot be empty.","error");
           return false;
       }
       
       else if(skills == ""){
           swal("Opsss !","Skills field cannot be empty.","error");
           return false;
       }
   
       else if(file == ""){
           swal("Opsss !","File field cannot be empty.","error");
           return false;
       }
   
       else{
           return true;
       }
   }
   
   
   
   
   // b) Backend form
   
   function validateEmail2(email2){
       const regex =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       return regex.test(email2);
   }
   function validateForm2(){
       const name2 = document.getElementById("name2").value;
       const age2 = document.getElementById("age2").value;
       const phone2 = document.getElementById("phone2").value;
       const email2 = document.getElementById("email2").value;
       const address2 = document.getElementById("address2").value;
       const experience2 = document.getElementById("experience2").value;
       const skills2 = document.getElementById("skills2").value;
       const file2 = document.getElementById("file2").value;
   
       if(name2 == ""){
           swal("Opsss !","Name field cannot be empty.","error");
           return false;
       }
   
       else if(name2 == name2.toUpperCase()){
           document.getElementById("name2").value=" ";
           swal("Opsss !","Name field cannot be UPPERCASE.","info");
           return false;
       }
   
       else if(name2.split(' ').length < 2){
           
           swal("Opsss !","Your fullname is REQUIRED","info");
           return false;
       }
   
       else if(age2 == ""){
           swal("Opsss !","Age field cannot be empty.","error");
           return false;
       }
   
       else if((age2 < 18) || (age2 > 50)){
           document.getElementById('age2').value='';
           swal("Opsss !","Age only between 18 and 50 years old","info");
           return false;
       }
   
       else if(email2 == ""){
           swal("Opsss !","Email field cannot be empty.","error");
           return false;
       }
   
       else if(!(validateEmail2(email2))){
           document.getElementById('email2').value='';
           swal("Opsss !","Put a valid email address.","error");
           return false;
       }
   
       else if(phone2 == ""){
           swal("Opsss !","Phone field cannot be empty.","error");
           return false;
       }
   
       else if(experience2 == ""){
           swal("Opsss !","Experience field cannot be empty.","error");
           return false;
       }
       
       else if(skills2 == ""){
           swal("Opsss !","Skills field cannot be empty.","error");
           return false;
       }
   
       else if(file2 == ""){
           swal("Opsss !","File field cannot be empty.","error");
           return false;
       }
   
       else{
           return true;
       }
   }
   
   
   // c) Fullstack form
   
   function validateEmail3(email3){
       const regex =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       return regex.test(email3);
   }
   function validateForm3(){
       const name3 = document.getElementById("name3").value;
       const age3 = document.getElementById("age3").value;
       const phone3 = document.getElementById("phone3").value;
       const email3 = document.getElementById("email3").value;
       const address3 = document.getElementById("address3").value;
       const experience3 = document.getElementById("experience3").value;
       const skills3 = document.getElementById("skills3").value;
       const file3 = document.getElementById("file3").value;
   
       if(name3 == ""){
           swal("Opsss !","Name field cannot be empty.","error");
           return false;
       }
   
       else if(name3 == name3.toUpperCase()){
           document.getElementById("name3").value=" ";
           swal("Opsss !","Name field cannot be UPPERCASE.","info");
           return false;
       }
   
       else if(name3.split(' ').length < 2){
           
           swal("Opsss !","Your fullname is REQUIRED","info");
           return false;
       }
   
       else if(age3 == ""){
           swal("Opsss !","Age field cannot be empty.","error");
           return false;
       }
   
       else if((age3 < 18) || (age3 > 50)){
           document.getElementById('age3').value='';
           swal("Opsss !","Age only between 18 and 50 years old","info");
           return false;
       }
   
       else if(email3 == ""){
           swal("Opsss !","Email field cannot be empty.","error");
           return false;
       }
   
       else if(!(validateEmail3(email3))){
           document.getElementById('email3').value='';
           swal("Opsss !","Put a valid email address.","error");
           return false;
       }
   
       else if(phone3 == ""){
           swal("Opsss !","Phone field cannot be empty.","error");
           return false;
       }
   
       else if(experience3 == ""){
           swal("Opsss !","Experience field cannot be empty.","error");
           return false;
       }
       
       else if(skills3 == ""){
           swal("Opsss !","Skills field cannot be empty.","error");
           return false;
       }
   
       else if(file3 == ""){
           swal("Opsss !","File field cannot be empty.","error");
           return false;
       }
   
       else{
           return true;
       }
       
   }
   
   
   
   // 3) Maximum size of  allowed uploadable file
   $(document).ready(function(){
   
       $("#file,#file2,#file3").bind('change', function(){
       var a = (this.files[0].size);
       if(a > 2 * 1048576){
           swal("Attention !", "Maximum allowed size is 2mb.","info");
           this.value = "";
       }
       });
   });
   
   
   // 4) Allow only letters in NAME
   
   $(".name").keyup(function(){
   
       if(!/^[a-zA-Z _]*$/.test(this.value)){
           this.value = this.value.split(/[^a-zA-Z _]/).join('');
       }
   });

   // 5) function that allows only two white space in the NAME input

   $(".name").on("keydown",function(){

    var $this = $(this);
    $(this).val($this.val().replace(/(\s{2,}) | [^a-zA-Z0-9_']/g,   ' ').replace(/^\s*/, ''));



   });