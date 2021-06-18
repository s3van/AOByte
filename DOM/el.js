import docElms from './docElms.js'

const el = (type, attributes, children) => {

    const errorMessage = "TypeError";

    if ((typeof type !== "string" || !type)
        || (!attributes || typeof attributes !== "object")
        || ((children !== null && !Array.isArray(children) && typeof children !== "string" && typeof children !== "object")
            || (children && typeof children === "object" && !Array.isArray(children) && !children.domElementKind))) {
        return errorMessage;
    }

    if (Array.isArray(children)) {
        children.forEach(e => e);
    }
    const docElm = new docElms[type](type, attributes, children);
    return docElm;
}

//testcase1
// const tree =
//   el("div", {"class": "some_classname", "id": "some_id"},
//     el("span", {}, 'hello')
//   );
// document.getElementById("root").appendChild(tree.draw());

//testcase2
// const tree =
//   el("div", {},
//     el("ul", {}, [
//       el("li", {}, "Item 1"),
//       el("li", {}, "Item 2"),
//       el("li", {}, "Item 3")
//     ])
//   );
// document.getElementById("root").appendChild(tree.draw());


//testcase3
const tree =
    el("form", { action: '/some_action' }, [
        el("label", { for: 'name' }, "First name:"),
        el("br", {}, null),
        el("input", { type: 'text', id: 'name', name: 'name', value: "My name" }, null),
        el("br", {}, null),
        el("label", { for: 'last_name' }, "Last name:"),
        el("br", {}, null),
        el("input", { type: 'text', id: 'last_name', name: 'last_name', value: "My second name" }, null),
        el("br", {}, null),
        el("input", { type: 'submit', value: "Submit" }, null),
    ]);
document.getElementById("root").appendChild(tree.draw());