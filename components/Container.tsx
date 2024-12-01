import { SafeAreaView } from 'react-native';
import { className } from "postcss-selector-parser";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SafeAreaView className={`${styles.container}`}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-6',
};
