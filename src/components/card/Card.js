import "./card.css"
export function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

// The card component is designed to reperesent a card in the Kanban application. The structure of the component is focusing on containing and rendering its child content (props.children), allowing flexibility in the placement of elements within the card.
