"use client";
import { useState, useEffect } from "react";
import styles from "./Table.module.scss";

const Table = (props) => {
    const rows = [];

    const [currentPage, setCurrentPage] = useState(1);
    const index = props.show ? props.show : 10;

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

    useEffect(() => {
        setCurrentPage(1);
    }, [props.data]);

    return (
        <>
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
                    {rows.length > 0 && !props.pagination ? (
                        rows
                    ) : rows.length > 0 && props.pagination ? (
                        rows.slice(
                            (currentPage - 1) * index,
                            currentPage * index
                        )
                    ) : (
                        <tr>
                            <td colSpan={props.columns.length}>
                                Veri bulunamadı
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {props.pagination && props.show < rows.length ? (
                <div className={styles.pagination}>
                    <button
                        {...(currentPage === 1 ? { disabled: true } : {})}
                        onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                            }
                        }}
                    >
                        Önceki
                    </button>
                    <button
                        {...(currentPage >= rows.length / index
                            ? { disabled: true }
                            : {})}
                        onClick={() => {
                            if (currentPage < rows.length / index) {
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                    >
                        Sonraki
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Table;
