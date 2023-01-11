import cx from "classnames";
import { ReactLiveBlock } from "@stories/ReactLiveBlock";

import { Tabs } from ".";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Inbox",
    value: "tab1",
  },
  {
    title: "Today",
    value: "tab2",
  },

  {
    title: "Upcoming",
    value: "tab3",
  },
];

export const variants = () => (
  <ReactLiveBlock scope={{ Tabs }}>
    <Tabs defaultValue="tab1">
      <Tabs.List>
        {tabs.map(({ title, value }) => (
          <Tabs.Trigger key={value} value={value}>
            <span className={cx("text-m font-medium")}>{title}</span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map(({ value }) => (
        <Tabs.Content key={value} value={value}>
          <span className="text-m">
            {
              {
                tab1: "Your inbox is empty",
                tab2: "Make some coffee",
                tab3: "Order more coffee",
              }[value]
            }
          </span>
        </Tabs.Content>
      ))}
    </Tabs>
  </ReactLiveBlock>
);
