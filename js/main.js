import Dialog from "./dialog";
import stories from "./story";


const startStory = () => {
  Dialog.story(stories);
}

document.addEventListener("DOMContentLoaded", (e) => {
  startStory();
});
