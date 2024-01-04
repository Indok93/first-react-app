export const List = props => {
    console.log(props);

    return (
        <ul>
            {props.data.map((item, key) => {
                <li key={key}>{item}</li>
            })}
        </ul>
    )
}