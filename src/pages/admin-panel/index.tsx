import { api } from 'utils/api';
import { DataTable } from 'components/AdminPanel/UserList/data-table';
import { columns } from 'components/AdminPanel/UserList/columns';

export default function UserListPage () {
  const { data, isLoading } = api.profile.getUsers.useQuery(undefined, { refetchOnWindowFocus: true });

  if (isLoading || !data) return null;
  return (
    <>
      {/*@ts-ignore*/}
      <DataTable data={data} columns={columns} />
    </>
  );
}