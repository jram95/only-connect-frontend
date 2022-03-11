export default function Timer(props: {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  function handleTimer() {
    const startingMinutes = 3;
    let time = startingMinutes * 60;
    const intervalID = setInterval(updateCountdown, 1000);
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      time--;
      props.setTimer(time);
      if (time < 0) {
        clearInterval(intervalID);
        props.setTimer(startingMinutes * 60);
      }
    }
  }
  return (
    <>
      <button
        onClick={() => {
          handleTimer();
        }}
      >
        START
      </button>
    </>
  );
}
