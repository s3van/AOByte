import { DomElm } from "./DomElm.js";
 
 const docElms = {

    "span" : class Span extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "div" : class Div extends DomElm {
        constructor(tagName,attributes, children) {
            super(tagName,attributes, children);
        }
    },

    "ul" : class Ul extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "li" : class Li extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "input": class Input extends DomElm {
        constructor(tagName,attributes, children) {
            super(tagName, attributes, children);
        }
    },

    "form" : class Form extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "label" : class Label extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    },

    "br" : class Br extends DomElm {
        constructor(tagName,attributes,children) {
            super(tagName, attributes,children);
        }
    }

}

export default docElms;