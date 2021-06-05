import react, { useState } from 'react'
import { utils } from './utils.js'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'

export default function StarMatch() {

    const [stars, setStars] = useState(utils.random(1, 9));
    const [availiableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
    const [candidateNumbers, setCandidateNumbers] = useState([])

    const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

    const numberStastus = (number) => {
        if (!availiableNumbers.includes(number)) {
            return 'used';
        }

        if (candidateNumbers.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available'

    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus == 'used') {
            return;
        }

        const newCandidateNumbers =
            currentStatus === 'available'
                ? candidateNumbers.concat(number)
                : candidateNumbers.filter(cn => cn !== number);
        candidateNumbers.concat(number);
        if (utils.sum(newCandidateNumbers) !== stars) {
            setCandidateNumbers(newCandidateNumbers);
        }
        else {
            const newAvailiableNums = availiableNumbers.filter(
                n => newCandidateNumbers.includes(n)
            );
            setStars(utils.randomSumIn(newAvailiableNums, 9));
            setAvailableNumbers(newAvailiableNums);
            setCandidateNumbers([]);
        }
    }

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
          </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay stars={stars}></StarsDisplay>
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            number={number}
                            status={numberStastus(number)}
                            onClick={onNumberClick}
                        ></PlayNumber>
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
}