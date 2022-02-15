import InputClues from "./InputClues";

export default function CreateWall(): JSX.Element {
  return (
    <>
      <div className="rules-box">
        <h3>Create your own wall</h3>
        <p>Create your own connecting wall by filling in the form below:</p>
        <InputClues />
        <InputClues />
        <InputClues />
        <InputClues />
      </div>
    </>
  );
}
