var currentTab = 0;
// Document ready
$(document).ready(() => {
  currentTab = 1;
  $("#step1").show();
  // Show multitabs step
  $(document).on("click", "ul.multiTabs>li", function () {
    var TabId = $(this).attr("data-trigger");
    $("div#" + TabId + " ").show('slow');
    currentTab = parseInt(TabId.replace("step", ""));
    $(".tabcontent:not(#" + TabId + ")").hide();
    console.log('current: ' +TabId +currentTab );
      if(currentTab>3){
      $( ".next" ).hide();
      $(".previous").hide();
      $(".finish").show();
    }else{
      $( ".next" ).show();
      $(".previous").show();
      $(".finish").hide();
    }

  });
});
// Next Button function
function next() {
  if (currentTab < 4) {
    $(".tabcontent").hide();
    currentTab++;
    $("#step" + currentTab).show('slow');
  }
  console.log('outnexxt'+ currentTab)

}
// Previus Button Function
function prev() {
  if (currentTab > 1) {
    $(".tabcontent").hide();
    currentTab--;
    $("#step" + currentTab).show('slow');
  }
  console.log('outprev'+ currentTab)
}

$(document).ready(function(){

    $(".finish").hide();
      $( ".next" ).click(function( event ) {
        if(currentTab>3){
        event.preventDefault();
        $( this ).hide();
        $(".previous").hide();
        $(".finish").show();
      }
    });
  });

function stepimg1(){
  var dataid = $('#step1-img').data("id");
  if(dataid==1 ){
  if( $('#step1-img').attr("src", "/Assets/Images/step-1.png")){
    $('#step1-img').attr("src", "/Assets/Images/step-1-active.png");
    $('#step2-img').attr("src", "/Assets/Images/step-2.png");
    $('#step3-img').attr("src", "/Assets/Images/step-3.png");
    $('#step4-img').attr("src", "/Assets/Images/step-4.png");
    console.log('gello')
  }
  console.log('gello')
}}
function stepimg2(){
  var dataid = $('#step2-img').data("id");
  console.log(dataid)
  if(dataid==2){
  if( $('#step2-img').attr("src", "/Assets/Images/step-2.png")){
    $('#step1-img').attr("src", "/Assets/Images/step-1.png");
    $('#step2-img').attr("src", "/Assets/Images/step-2-active.png");
    $('#step3-img').attr("src", "/Assets/Images/step-3.png");
    $('#step4-img').attr("src", "/Assets/Images/step-4.png");
    console.log('hello')
  }
  console.log('hello')
}} 
function stepimg3(){
  var dataid = $('#step3-img').data("id");
  console.log(dataid)
  if(dataid==3){
  if( $('#step3-img').attr("src", "/Assets/Images/step-3.png")){
    $('#step1-img').attr("src", "/Assets/Images/step-1.png");
    $('#step2-img').attr("src", "/Assets/Images/step-2.png");
    $('#step3-img').attr("src", "/Assets/Images/step-3-active.png");
    $('#step4-img').attr("src", "/Assets/Images/step-4.png");
    console.log('hello')
  }
  console.log('hello')
}} 
function stepimg4(){
  var dataid = $('#step4-img').data("id");
  console.log(dataid)
  if(dataid==4){
  if( $('#step4-img').attr("src", "/Assets/Images/step-4.png")){
    $('#step1-img').attr("src", "/Assets/Images/step-1.png");
    $('#step2-img').attr("src", "/Assets/Images/step-2.png");
    $('#step3-img').attr("src", "/Assets/Images/step-3.png");
    $('#step4-img').attr("src", "/Assets/Images/step-4-active.png");
    console.log('hello')
  }
  console.log('hello')
}} 
