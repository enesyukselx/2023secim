import styles from "./Table.module.scss";

const Table = (props) => {
    const rows = [];

    props.data.forEach((column) => {
        const cells = [];
        for (const key in column) {
            cells.push(
                <td key={Math.random()} data-label={props.columns[key]}>
                    {column[key].value}
                </td>
            );
        }
        rows.push(<tr key={Math.random()}>{cells}</tr>);
    });

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {props.columns.map((column) => {
                        return (
                            <th key={Math.random()} scope="col">
                                {column}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.length > 0 ? (
                    rows
                ) : (
                    <tr>
                        <td colSpan={props.columns.length}>Veri bulunamadı</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
