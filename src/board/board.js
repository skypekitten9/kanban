import './board.css'
export default function Board() {
    return (
        <div className="board">
            <div className="boardColumn" id='to-do'></div>
            <div className="boardColumn" id='in-progress'></div>
            <div className="boardColumn" id='test'></div>
            <div className="boardColumn" id='done'></div>
        </div>
    );
}