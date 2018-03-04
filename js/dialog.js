import '../css/dialog.scss';

import vex from "vex-js";
import vexDialog from "vex-dialog";
import _ from "lodash";

vex.registerPlugin(vexDialog);
vex.defaultOptions.className = "vex-theme-wireframe";

const addOverlay = () => {
  document.getElementById("overlay").className = "overlay";
};

const removeOverlay = () => {
  document.getElementById("overlay").className = "";
};

const open = (content, options) => {
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
  contentNode.addEventListener("click", (e) => dialog.close());
  contentNode.addEventListener("keyup", (e) => dialog.close());
  contentNode.addEventListener("blur", function(e) { setTimeout(() => this.focus(), 0) });
  contentNode.focus();

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
        dialog = open(stories[index].join(""), options);
      } else {
        close(dialog);
        resolve();
      }
    };

    dialog = open(stories[index].join(""), options);
  });

  return dfd;
};

const Dialog = {
  open,
  close,
  story,
};

export default Dialog;
