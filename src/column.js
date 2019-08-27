import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 350px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "lightgreen" : "white")};

  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextprops) {
    if (nextprops.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index}></Task>
    ));
  }
}

// export default class column extends Component {
//   render() {
//     return (
//       <Container>
//         <Title>{this.props.column.title}</Title>
//         <Droppable droppableId={this.props.column.id}>
//           {(provided, snapshot) => (
//             <TaskList
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               isDraggingOver={snapshot.isDraggingOver}
//             >
//               <InnerList tasks={this.props.tasks}></InnerList>
//               {/* {this.props.tasks.map((task, index) => (
//                 <Task key={task.id} task={task} index={index} /> */}

//               {provided.placeholder}
//             </TaskList>
//           )}
//         </Droppable>
//       </Container>
//     );
//   }
// }

export default function column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <InnerList tasks={props.tasks}></InnerList>
            {/* {this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} /> */}

            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
