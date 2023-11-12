import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card";
import { useState } from "react";
import "./kanban.css"

export function Kanban() {
  const [data, setData] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="kanban__section"
                ref={provided.innerRef}
              >
                <div className="kanban__section__title">{section.title}</div>

                <div className="kanban__section__content">
                  {section.tasks.map((tasks, index) => (
                    <Draggable
                      key={tasks.id}
                      draggableId={tasks.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <Card>{tasks.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

// Defined a functional component "Kanban" that uses state to store and update Kanban board data.
// Defined an onDragEnd function that is called when a drag-and-drop operation is completed.
// Rendered the board using the "DragDropContext" component from the library as the main container for drag-and-drop functionality.
// Iterated through the board sections, rendering each section as a "Droppable" component.
// Within each section, tasks are rendered using the "Draggable" component, providing drag-and-drop capability.