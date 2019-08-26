import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    //TODO reoder our column
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    // remove this first
    newTaskIds.splice(source.index, 1);
    // start at new destionation too add it
    newTaskIds.splice(destination.index, 0, draggableId);

    //creat new column
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };
    console.log(this.state);
    console.log(newState);
    //update new state
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
