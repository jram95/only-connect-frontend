export default function Rules(): JSX.Element {
  return (
    <>
      <div className="rules-box">
        <h1>The Rules</h1>
        <p>Welcome to the connecting wall, of Only Connect fame. </p>
        <p>
          Each wall contains 16 clues; to solve the wall, the player has to
          correctly select four groups of four connecting items. The puzzle may
          include red herrings, as some clues may fit into more than one
          category. The player has 3 minutes to solve the wall, after which time
          the wall automatically reveals the correct four groups.
        </p>
        <h4>Points system</h4>
        <p>
          Once the game is over, the player can tally up the points:{" "}
          <ul className="points">
            <li>1 point for each correct group</li>
            <li>1 point for each right connection</li>
            <li>
              10 points in total if you have managed to guess all the right
              groups and all the right connections
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
