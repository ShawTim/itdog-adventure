import '../css/story.scss';

export default [{
  content: [
    "<div class='story-message'>",
      "<div class='story-message-line1'>Ｘ月Ｘ日</div>",
      "<div class='story-message-line2'>天陰</div>",
      "<div class='story-message-line3'>是一個如常上班的日子</div>",
    "</div>",
  ].join(""),
  type: "text",
  delay: 3,
}, {
  content: [
    "<div class='story-message'>",
      "<div class='story-message-line1'>這個平常的日子</div>",
      "<div class='story-message-line2'>卻因為一個公司會議</div>",
      "<div class='story-message-line3'>為事件拉開了序幕⋯⋯</div>",
    "</div>",
  ].join(""),
  type: "text",
  delay: 3,
}, {
  content: [
    "<div class='story-comic story-comic-1'>",
      "<div class='story-comic-img-1'></div>",
      "<div class='story-comic-text story-comic-text-1-1'>為節省成本，公司決定唔再畀錢買電腦技術支援服務。嚟緊希望各位開發部同事拍硬檔幫幫手喇。都係電腦野啫。</div>",
      "<div class='story-comic-emoji story-comic-emoji-1-1'>！</div>",
      "<div class='story-comic-emoji story-comic-emoji-1-2'>！</div>",
      "<div class='story-comic-emoji story-comic-emoji-1-3'>！</div>",
      "<div class='story-comic-emoji story-comic-emoji-1-4'>！</div>",
      "<div class='story-comic-emoji story-comic-emoji-1-5'>！</div>",
    "</div>",
  ].join(""),
  type: "comic",
  scenes: [{
    scale: 2,
    origin: "1130px 0",
  }],
}, {
  content: [
    "<div class='story-message'>",
      "<div class='story-message-line1'>從此</div>",
      "<div class='story-message-line2'>開發部生活不一樣⋯⋯</div>",
    "</div>",
  ].join(""),
  type: "text",
  delay: 2,
}, {
  content: [
    "<div class='story-comic story-comic-2'>",
      "<div class='story-comic-img-2'></div>",
      "<div class='story-comic-text story-comic-text-2-1'>出嚟呀—！</div>",
      "<div class='story-comic-text story-comic-text-2-2'>幫我呀——</div>",
      "<div class='story-comic-text story-comic-text-2-3'>你個嘢壞咗呀！</div>",
      "<div class='story-comic-text story-comic-text-2-4'>死機呀——</div>",
      "<div class='story-comic-text story-comic-text-2-5'>我無得覆個客呀—！</div>",
      "<div class='story-comic-text story-comic-text-2-6'>你班ＩＴ狗快應門呀！</div>",
      "<div class='story-comic-text story-comic-text-2-7'>出嚟換碳粉盒呀！</div>",
      "<div class='story-comic-text story-comic-text-2-8'>幫我呀——</div>",
      "<div class='story-comic-text story-comic-text-2-9'>順便出嚟換水呀——！</div>",
      "<div class='story-comic-text story-comic-text-2-10'>渴撚死佢罷啦仆你個街！</div>",
      "<div class='story-comic-text story-comic-text-2-11'>試過reboot未呀冚家剷！</div>",
      "<div class='story-comic-emoji story-comic-emoji-2-1'>╬</div>",
    "</div>",
  ].join(""),
  type: "comic",
  scenes: [{
    scale: 4,
    origin: "750px 250px",
  }, {
    scale: 2,
    origin: "450px 30px",
  }, {
    scale: 2.2,
    origin: "720px 700px",
  }, {
    scale: 4,
    origin: "360px 475px",
  }, {
    scale: 3.5,
    origin: "340px 700px",
  }],
}, {
  content: [
    "<div class='story-message'>",
      "<div class='story-message-line1'>公司產品開發進度嚴重受影響</div>",
      "<div class='story-message-line2'>開發部IT狗們終於按捺不住</div>",
      "<div class='story-message-line3'>找來老闆反映</div>",
    "</div>",
  ].join(""),
  type: "text",
  delay: 3,
}, {
  content: [
    "<div class='story-comic story-comic-3'>",
      "<div class='story-comic-img-3'></div>",
      "<div class='story-comic-text story-comic-text-3-1'>老闆⋯！</div>",
      "<div class='story-comic-text story-comic-text-3-2'>我好想專心寫程式⋯⋯</div>",
      "<div class='story-comic-emoji story-comic-emoji-3-1 tears'><div></div><div></div><div></div></div>",
    "</div>",
  ].join(""),
  type: "comic",
  scenes: [{
    scale: 2.5,
    origin: "930px -40px",
  }, {
    scale: 2,
    origin: "980px 420px",
  }, {
    scale: 1.3,
    origin: "-600px 200px",
  }],
}, {
  content: [
    "<div class='story-message'>",
      "<div class='story-message-line1'>這是一個</div>",
      "<div class='story-message-line2'>IT狗掙扎求存的故事⋯⋯</div>",
    "</div>",
  ].join(""),
  type: "text",
  delay: 2,
}];
