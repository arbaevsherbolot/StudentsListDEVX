import React, { useState, useEffect } from "react";
import styles from "./Table.module.scss";

export const Table = ({ data }) => {
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const sortStudents = () => {
      const sort = data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      return sort;
    };

    sortStudents();
     !setSort(true) ? setSort(false) : setSort(true);
  });

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setSort();
                  }}>
                  A/Z
                </button>
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
            {!data ? (
              <tr>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </td>
                  <td>
                    <span>{item.course}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
