import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { AiOutlineCheck } from 'react-icons/ai';

import { DataTableColumnHeader } from './data-table-column-header';
import { User } from 'components/AdminPanel/UserList/schema';
import { DataTableRowActions } from 'components/AdminPanel/UserList/data-table-row-actions';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'surname',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Surname" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue('surname')}</div>,
  },
  {
    accessorKey: 'clerk_user_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Clerk ID" />
    ),
    cell: ({ row }) => <div className="w-[20px]">{row.getValue('clerk_user_id') ? <AiOutlineCheck /> : null}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="w-[200px]">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => <div className="w-[90px]">{row.getValue('role')}</div>,
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    // @ts-ignore
    cell: ({ row }) => <div className="w-[250px]">{dayjs(row.getValue('created_at').toString()).format('YYYY-MM-DD HH:mm:ss')}</div>,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];