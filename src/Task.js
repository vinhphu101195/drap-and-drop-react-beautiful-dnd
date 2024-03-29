import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? " skyblue " : "white")};
`;

// export default class Task extends Component {
//   render() {
//     return (
//       <Draggable draggableId={this.props.task.id} index={this.props.index}>
//         {(provided, snapshot) => (
//           <Container
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             isDragging={snapshot.isDragging}
//           >
//             {this.props.task.content}
//           </Container>
//         )}
//       </Draggable>
//     );
//   }
// }

const Task = props => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
