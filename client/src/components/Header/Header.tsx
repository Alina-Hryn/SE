import * as React from "react";
import { AppBar } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "@material-ui/lab";
import Tabs from "@material-ui/core/Tabs";
import { useState } from "react";

type Props = {
  tabValue: number;
};

export const Header = (props: Props) => {
  const [tabValue, setTabValue] = useState(props.tabValue);

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={tabValue}
          onChange={(event, value) => setTabValue(value)}
          aria-label="simple tabs example"
        >
          <Tab label="AVARO" />
          <Tab label="SEANCES" />
          <Tab label="MOVIES" />
          <Tab label="CINEMAS" />
        </Tabs>
      </AppBar>
    </div>
  );
};
