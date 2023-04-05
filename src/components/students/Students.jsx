import React, { useState, useEffect } from "react";
import { Table } from "./table/Table";
import { Student } from "./studentList";
import styles from "./Students.module.scss";

export const Students = () => {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email", "course"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some(
        (key) =>
          item[key].toLowerCase().includes(query) || item[key].includes(query)
      )
    );
  };

  return (
    <>
      <div className={styles.students_page}>
        <input
          type="text"
          placeholder="Search students"
          className={styles.search_input}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Table data={search(Student)} />
      </div>
    </>
  );
};
