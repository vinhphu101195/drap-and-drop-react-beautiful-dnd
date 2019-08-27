import React, { useState } from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

// class App extends React.Component {
//   state = initialData;

//   onDragEnd = result => {
//     //TODO reoder our column
//     const { destination, source, draggableId } = result;

//     if (!destination) {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     const start = this.state.columns[source.droppableId];
//     const finish = this.state.columns[destination.droppableId];

//     //same column
//     if (start === finish) {
//       const newTaskIds = Array.from(start.taskIds);
//       // remove this first
//       newTaskIds.splice(source.index, 1);
//       // start at new destionation too add it
//       newTaskIds.splice(destination.index, 0, draggableId);

//       //creat new column
//       const newColumn = {
//         ...start,
//         taskIds: newTaskIds
//       };

//       const newState = {
//         ...this.state,
//         columns: {
//           ...this.state.columns,
//           [newColumn.id]: newColumn
//         }
//       };
//       console.log(this.state);
//       console.log(newState);
//       //update new state
//       this.setState(newState);
//       return;
//     }

//     //different column
//     //remove task from old column
//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds
//     };

//     //add new task to new column
//     const finishTaskIds = Array.from(finish.taskIds);
//     finishTaskIds.splice(destination.index, 0, draggableId);
//     const newFinish = {
//       ...finish,
//       taskIds: finishTaskIds
//     };

//     //update new state
//     const newState = {
//       ...this.state,
//       columns: {
//         ...this.state.columns,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish
//       }
//     };

//     this.setState(newState);
//   };

//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Container>
//           {this.state.columnOrder.map(columnId => {
//             const column = this.state.columns[columnId];
//             const tasks = column.taskIds.map(
//               taskId => this.state.tasks[taskId]
//             );

//             return <Column key={column.id} column={column} tasks={tasks} />;
//           })}
//         </Container>
//       </DragDropContext>
//     );
//   }
// }

const Index = () => {
  const [data, setdata] = useState(initialData);

  const onDragEnd = result => {
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

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      // remove this first
      newTaskIds.splice(source.index, 1);
      // start at new destionation too add it
      newTaskIds.splice(destination.index, 0, draggableId);

      //creat new column
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      };
      console.log(data);
      console.log(newState);
      //update new state
      setdata(newState);
      return;
    }

    //different column
    //remove task from old column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    //add new task to new column
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    //update new state
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    setdata(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
