import React from "react";
import styles from "./Table.module.scss";

export const Table = ({ data }) => {
  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <tbody>
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
                  <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
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
