import React, { useRef } from "react";

interface TodoFormProps {
  addHandler(title: string): void;
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.addHandler(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Inter task name"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Inter task name
      </label>
    </div>
  );
};
