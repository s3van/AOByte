import DOMElm from "./DOMElm.js";

const docElms = {

    "span": class Span extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "div": class Div extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "ul": class Ul extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "li": class Li extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "input": class Input extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "form": class Form extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "label": class Label extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "br": class Br extends DOMElm {
        constructor(tagName, attributes, children) {
            super(tagName, attributes, children);
        }
    }

}

export default docElms;