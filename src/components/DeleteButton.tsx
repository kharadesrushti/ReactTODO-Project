type DeleteButtonProps={
  id:number;
  onDeleteTodo:(id:number)=>void;
}

export default function DeleteButton({ id, onDeleteTodo }:DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
