
export default function PlayNumber(props) {

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
      };

    return (
        <button
            className="number"
            style={{ backgroundColor: colors[props.status] }}
            onClick={() => console.log("clicked")}>{props.number}</button>
    )
}