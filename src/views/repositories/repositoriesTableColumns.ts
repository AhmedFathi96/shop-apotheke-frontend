import { tableFieldTypes } from "../components/table/types"
import StarsNumber from "../components/table/containerField/starsNumber";

export const repositoriesTableColumns = [
    {
      label: "Created at",
      props: "created_at",
      width: "12%",
      type: tableFieldTypes.date,
    },
    {
      label: "Repository name",
      props: "name",
      width: "15%",
      type: tableFieldTypes.text,
    },
    {
      label: "GitHub link",
      props: "url",
      width: "25%",
      type: tableFieldTypes.text,
    },
    {
      label: "Description",
      props: "description",
      width: "25%",
      type: tableFieldTypes.text,
    },
    {
      label: "Stars number",
      props: "stargazers_count",
      width: "10%",
      type: tableFieldTypes.container,      
    },
    {
      label: "Stars this Repo",
      props: "",
      width: "10%",
      type: tableFieldTypes.controller,      
    }
  ];
  
  export default repositoriesTableColumns;

  