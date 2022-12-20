interface Props {
  label?: string;
}

export const DummyComponent = ({ label = "Dummy component" }: Props) => {
  return <p>{label}</p>;
};
