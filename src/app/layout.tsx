import "@/styles/globals.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return children;
};

export default RootLayout;
