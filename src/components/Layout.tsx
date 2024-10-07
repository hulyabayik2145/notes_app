import { Navigate, Outlet, useParams } from "react-router-dom";

type LayoutPropsType = {
  notes: Note[];
};

const Layout = ({ notes }) => {
  // url den aldığı id ye göre doğru notu bulacak ve notun bilgisini çocuk toutelara aktaracağız

  const { id } = useParams();

  const found = notes.find((n) => n.id === id);

  if (!found) return <Navigate to={"/"} />;
  return <Outlet context={found} />;

  return <div>Layout</div>;
};

export default Layout;
