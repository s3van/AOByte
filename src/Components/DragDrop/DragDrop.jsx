import React, { Component } from "react";
import DrDrStyles from "./DragDrop.module.css";
import IdGenerator from "../../Utlis/IdGenerator";

export default class DragDrop extends Component {
  state = {
    elemenets: [
      {
        category: "button",
        type: <button style={{ width: "58px" }}>Button</button>,
        _id: IdGenerator(),
      },
      {
        category: "input",
        type: <input style={{ width: "50px" }} placeholder="Input" />,
        _id: IdGenerator(),
      },
      {
        category: "textarea",
        type: (
          <textarea
            placeholder="Text"
            style={{ width: "52px", height: "15px", resize: "none" }}
          />
        ),
        _id: IdGenerator(),
      },
      {
        category: "select",
        type: (
          <select
            disabled
            style={{ width: "57px", height: "20px", size: "3" }}
          ></select>
        ),
        _id: IdGenerator(),
      },
      {
        category: "input",
        type: <input style={{ width: "50px" }} type="checkbox" />,
        _id: IdGenerator(),
      },
      {
        category: "input",
        type: <input style={{ width: "50px" }} type="radio" />,
        _id: IdGenerator(),
      },
    ],
    completedElemenets: [],
  };

  //the user starts dragging an item. 
  onDragStart = (e, _id) => {
    e.dataTransfer.setData("_id", _id);
  };

  //a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
  //Therefore, we use e.preventDefault.
  onDragOver = (e) => {
    e.preventDefault();
  };

  //an item is dropped on a valid drop target.
  onDrop = (e) => {
    let { elemenets, completedElemenets } = this.state;
    let _id = e.dataTransfer.getData("_id");
    elemenets.filter((elm) => {
      if (elm._id === _id) {
        completedElemenets.push(elm);
      }
    });
    this.setState({
      ...this.state,
      elemenets,
      completedElemenets,
    });
  };

  render() {
    const { elemenets, completedElemenets } = this.state;

    let completedElemenetsJSX = [];

    const cls = [DrDrStyles.unique];
    if (completedElemenets.length) {
      cls.push(DrDrStyles.uniqueWrapper);
    }
    
    let elemenetsJSX = elemenets.map((elm) => {
      return (
        <div
          key={elm._id}
          className={DrDrStyles.draggable}
          onDragStart={(e) => this.onDragStart(e, elm._id)}
          draggable
        >
          {elm.type}
        </div>
      );
    });
    if (completedElemenets) {
      completedElemenetsJSX = completedElemenets.map((elm) => {
        return (
          <div
            key={IdGenerator()}
            className={DrDrStyles.droppable}
          >
            {elm.type}
          </div>
        );
      });
    }

    return (
      <>
        <h2 className={DrDrStyles.header}>DRAG & DROP</h2>
        <div className={DrDrStyles.containerDrag}>
          <div className={DrDrStyles.drag}>
            <div className={DrDrStyles.elmHeader}>DRAGGABLE</div>
            {elemenetsJSX}
          </div>
          <div
            className={DrDrStyles.completed}
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)}
          >
            <div className={DrDrStyles.elmHeaderCompleted}>COMPLETED</div>
            <div className={cls.join(" ")}>
              {completedElemenetsJSX}
            </div>
          </div>
        </div>
      </>
    );
  }
}
