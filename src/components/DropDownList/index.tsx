export default function DropDownList(props: { data: string[], name?: string }) {
    const list = props.data.map((item:string) => <option value={item}>{item}</option>);

    return (
        <select name={props.name}>
            {list}
        </select>
    )
}