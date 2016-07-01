var page = tabris.create("Page", {
  title: "Calendar Widget",
  topLevel: true
});

tabris.create("Button", {
  id: "button",
  text: "Get Date",
  layoutData: {left: 16, right: 16, bottom: 16}
}).on("select", function() {
  var date = page.children("#calendar").get("date");
  console.log("date: " + new Date(parseInt(date)).toUTCString());
}).appendTo(page);

tabris.create("ESCalendar", {
  id: "calendar",
  date: new Date("October 13, 2014").getTime(),
  layoutData: {left: 0, right: 0, top: 0, bottom: "#button 16"}
}).on("change:date", function(widget, date) {
  console.log(new Date(parseInt(date)).toUTCString());
}).appendTo(page);

page.open();