/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import Axios from "axios";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const API_URL = "http://127.0.0.1:8000/api/cruises";

export default function data() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await Axios.get(API_URL, config);
        const datar = response.data.data;
        console.log(datar);
        const transformData = datar.map((item) => ({
          name: <GuideName name={item.cruise_name} />,
          category: (
            <MDTypography variant="caption" color="text" fontWeight="regular">
              {item.cruise_category}
            </MDTypography>
          ),
          email: (
            <MDTypography variant="caption" color="text" fontWeight="regular">
              {item.contact_email}
            </MDTypography>
          ),
          telephone: (
            <MDTypography variant="caption" color="text" fontWeight="regular">
              {item.contact_phone}
            </MDTypography>
          ),
          action: (
            <MDTypography
              component="a"
              href="{itmen.id}"
              variant="caption"
              color="info"
              fontWeight="medium"
            >
              Edit
            </MDTypography>
          ),
        }));

        setRows(transformData);
      } catch (error) {
        console.error("Error al cargar los datos desde el API", error);
      }
    };
    fetchData();
  }, []);

  const GuideName = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "cruise name", accessor: "name", width: "45%", align: "left" },
      { Header: "category", accessor: "category", align: "center" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "telephone", accessor: "telephone", align: "center" },
      { Header: "actions", accessor: "action", align: "center" },
    ],

    rows,
  };
}
