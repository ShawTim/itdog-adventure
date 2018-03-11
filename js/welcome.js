import '../css/welcome.scss';

const createNodeWithClass = (cls) => {
  const div = document.createElement("div");
  div.className = cls;
  return div;
};

const Welcome = {
  render: (container) => {
    container.className += " welcome-active";
    container.appendChild(createNodeWithClass("welcome-corner welcome-corner-top-left"));
    container.appendChild(createNodeWithClass("welcome-corner welcome-corner-top-right"));
    container.appendChild(createNodeWithClass("welcome-corner welcome-corner-bottom-left"));
    container.appendChild(createNodeWithClass("welcome-corner welcome-corner-bottom-right"));
    container.appendChild(createNodeWithClass("welcome-center welcome-center-before"));
    container.appendChild(createNodeWithClass("welcome-center welcome-center-after"));
    container.appendChild(createNodeWithClass("welcome-center welcome-center-background"));
  }
};

export default Welcome;
