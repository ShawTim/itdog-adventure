import '../css/radiation.scss';

const restartRadiation = (node) => {
  setTimeout(() => node.classList.remove("radiation"), 0);
  setTimeout(() => node.classList.add("radiation"), 10);
};

const zoom = (contentNode, { scale, translate, origin }) => {
  const s = !!scale ? `scale(${scale})` : "";
  const t = !!translate ? `translate(${translate})` : "";
  contentNode.style.transform = `${s} ${t}`;
  contentNode.style.transformOrigin = origin || "";
};

const createEventNode = () => {
  const div = document.createElement("div");
  div.className = "radiation-event";
  div.setAttribute("tabindex", 0);
  document.body.appendChild(div);
  return div;
};

const removeEventNode = (node) => {
  document.body.removeChild(node);
};

export default class Radiation {
  constructor({ focusNode, contentNode, eventNode, scenes }) {
    this.focusNode = focusNode;
    this.contentNode = contentNode;
    this.eventNode = eventNode;
    this.scenes = scenes;
    this._index = 0;
  }

  nextEvent() {
    this._index++;
    this.next();
  }

  lastEvent() {
    this.contentNode.style.transform = "";
    this.contentNode.style.transformOrigin = "";

    setTimeout(() => {
      this.contentNode.classList.add("radiation-last");
      this._eventNode && removeEventNode(this._eventNode);
      this.focusNode.classList.remove("radiation");
      this.eventNode.focus();
      this._resolve && this._resolve();
    }, 2000);
  }

  next() {
    if (this._index >= this.scenes.length-1) {
      this._eventNode && removeEventNode(this._eventNode);
      this._eventNode = createEventNode();
      this._eventNode.addEventListener("click", this.lastEvent.bind(this));
      this._eventNode.addEventListener("keyup", this.lastEvent.bind(this));
      this._eventNode.focus();

      restartRadiation(this.focusNode);
      zoom(this.contentNode, this.scenes[this._index]);
    } else {
      restartRadiation(this.focusNode);
      zoom(this.contentNode, this.scenes[this._index]);
    }
  }

  focus() {
    this.focusNode.classList.add("radiation");
    this.contentNode.style.transition = "transform 2s, transform-origin 1s";
    this._eventNode = createEventNode();

    this.next();

    this._eventNode.addEventListener("click", this.nextEvent.bind(this));
    this._eventNode.addEventListener("keyup", this.nextEvent.bind(this));
    this._eventNode.focus();

    const self = this;
    this._dfd = new Promise((resolve) => {
      self._resolve = resolve;
    });

    return this._dfd;
  }
};
