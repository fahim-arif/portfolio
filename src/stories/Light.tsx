type Props = {
  /** some description */
  variant?: "green" | "yellow" | "red";
};

/** Some comment about my Light component */
export default function Light(props: Props) {
  return (
    <div
      style={{
        // padding: 20,
        background: props.variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
}
