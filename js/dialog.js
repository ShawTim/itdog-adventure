import '../css/dialog.scss';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-wireframe.css';

import vex from "vex-js";
import vexDialog from "vex-dialog";
import _ from "lodash";
import Radiation from "./radiation";

vex.registerPlugin(vexDialog);
vex.defaultOptions.className = "vex-theme-wireframe";

const addOverlay = () => {
  document.getElementById("overlay").className = "overlay";
};

const removeOverlay = () => {
  document.getElementById("overlay").className = "";
};

const open = (input, options) => {
  const content = typeof(input) === "string" ? input : (input.content || "");
  const delay = input.delay || 0;
  const type = typeof(input) === "string" ? "text" : (input.type || "text");
  const scenes = input.scenes || []

  const dialog = vex.open(_.merge({
    unsafeContent: content,
    showCloseButton: true,
    escapeButtonCloses: false,
    overlayClosesOnClick: false,
    closeAllOnPopState: false,
  }, options));

  addOverlay();

  const contentNode = dialog.contentEl;
  contentNode.setAttribute("tabindex", 0);
  contentNode.focus();
  const setContentNodeEvent = () => {
    contentNode.addEventListener("blur", function(e) { setTimeout(() => this.focus(), 0) });
    setTimeout(() => {
      contentNode.addEventListener("click", (e) => dialog.close());
      contentNode.addEventListener("keyup", (e) => dialog.close());
    }, delay*1000);
  };

  if (type === "text") {
    setContentNodeEvent();

    const closeNode = dialog.closeEl;
    closeNode.style.animationDelay = `${delay}s`;
  } else if (type === "comic") {
    const radiation = new Radiation({
      focusNode: dialog.rootEl,
      contentNode,
      eventNode: contentNode,
      scenes
    });
    radiation.focus().then(setContentNodeEvent);
  }

  return dialog;
};

const close = (dialog) => {
  removeOverlay();
  return vex.close(dialog);
};

const story = (stories) => {
  const dfd = new Promise((resolve) => {
    let index = 0;
    let dialog;
    const options = {};
    options.afterClose = () => {
      if (++index < stories.length) {
        dialog = open(stories[index], options);
      } else {
        close(dialog);
        resolve();
      }
    };

    dialog = open(stories[index], options);
  });

  return dfd;
};

const Dialog = {
  open,
  close,
  story,
};

export default Dialog;
