import { Button } from "./Button";
import { ReactLiveBlock } from "@stories/ReactLiveBlock";

export const variants = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button variant="default" label="Default" />
    <Button variant="warning" label="Warning" />
    <Button variant="danger" label="Danger" />
    <Button variant="info" label="Info" />
    <Button variant="success" label="Success" />
  </ReactLiveBlock>
);

export const sizes = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button size="small" label="Button (small)" />
    <Button size="medium" label="Button (medium)" />
    <Button size="large" label="Button (large)" />
  </ReactLiveBlock>
);
