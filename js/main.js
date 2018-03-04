import Dialog from "./dialog";
import Welcome from "./welcome";
import stories from "./story";

document.addEventListener("DOMContentLoaded", (e) => {
  Dialog.story(stories).then(() => {
    Welcome.render(document.getElementById("welcome-container"));
  });
});
