import { utils } from './utils'

export default function StarsDisplay(props) {
    return (
        <div>
            {utils.range(1, props.stars).map(starId =>
                <div key={starId} className="star" />)}
        </div>
    )
}