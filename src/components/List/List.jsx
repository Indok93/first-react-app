export const List = props => {
    console.log(props);

    return (
        <ul>
            {props.data.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}