import { ChangeEvent } from "react";

export default function InputUsername(props: {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    props.setUsername(e.target.value);
  }
  return (
    <>
      <input
        onChange={(e) => {
          handleUsername(e);
        }}
      />
    </>
  );
}
