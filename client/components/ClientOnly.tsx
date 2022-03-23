import { useEffect, useState } from "react";

/** To use Apollo Client hooks, we have to ensure that the
 *  component is client side rendered. Otherwise the queries or mutations
 *  could be done server side, before the client can read them.
 */
const ClientOnly: React.FC = ({ children, ...props }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...props}>{children}</div>;
};

export default ClientOnly;
