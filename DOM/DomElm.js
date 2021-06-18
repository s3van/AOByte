export class DomElm {
    constructor(tagName, attributes, children) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
        this.domElementKind = true;
    }

    draw() {
        const element = document.createElement(this.tagName);
        
        for (let attribute in this.attributes) {
            element.setAttribute(attribute, this.attributes[attribute]);
        }

        if (typeof this.children === "string") {
            element.innerHTML = this.children;
            return element;
        } else if (!this.children) {
            return element;
        }

        if(!Array.isArray(this.children) ) {
            element.appendChild(this.children.draw());
   
        } else {
             for (let key of this.children) {
                element.appendChild(key.draw());
             }
        }

        return element;
    }
}