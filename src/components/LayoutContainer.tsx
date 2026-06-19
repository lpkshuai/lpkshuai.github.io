type Props = {
  children: React.ReactNode;
};

export default function LayoutContainer({ children }: Props) {
  return <div className="mx-auto max-w-6xl px-6">{children}</div>;
}
