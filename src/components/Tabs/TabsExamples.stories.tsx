import cx from "classnames";
import { ReactLiveBlock } from "@stories/ReactLiveBlock";

import * as Tabs from ".";

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
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        {tabs.map(({ title, value }) => (
          <Tabs.Trigger key={value} value={value}>
            <span
              className={cx(
                "text-m font-medium",
                "text-gray-700 dark:text-gray-100"
              )}
            >
              {title}
            </span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map(({ value }) => (
        <Tabs.Content key={value} value={value}>
          <span className="text-m text-gray-700 dark:text-gray-100">
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
    </Tabs.Root>
  </ReactLiveBlock>
);
