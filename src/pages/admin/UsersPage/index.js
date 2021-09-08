import { AdminLayout } from "../../../common/layout/AdminLayout";
import { UsersPage as Wrappered } from "./UsersPage";

export const UsersPage = () => {
  return (
    <AdminLayout>
      <Wrappered />
    </AdminLayout>
  );
};
