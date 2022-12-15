var currentTab = 0;
// Document ready
$(document).ready(() => {
  currentTab = 1;
  $("#step1").show();
  // Show multitabs step
  $(document).on("click", "ul.multiTabs>li", function () {
    var TabId = $(this).attr("data-trigger");
    $("div#" + TabId + " ").show();
    currentTab = parseInt(TabId.replace("step", ""));
    $(".tabcontent:not(#" + TabId + ")").hide();
  });
});
// Next Button function
function next() {
  if (currentTab < 4) {
    $(".tabcontent").hide();
    currentTab++;
    $("#step" + currentTab).show();
  }
}
// Previus Button Function
function prev() {
  if (currentTab > 1) {
    $(".tabcontent").hide();
    currentTab--;
    $("#step" + currentTab).show();
  }
}
