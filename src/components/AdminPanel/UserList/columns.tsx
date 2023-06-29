import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { Task } from 'components/AdminPanel/UserList/schema';
import { AiOutlineCheck } from 'react-icons/ai';
import dayjs from 'dayjs';

export const columns: ColumnDef<Task>[] = [
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
    cell: ({ row }) => <div className="w-[50px]">{row.getValue('role')}</div>,
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    // @ts-ignore
    cell: ({ row }) => <div className="w-[250px]">{dayjs(row.getValue('created_at').toString()).format('YYYY-MM-DD HH:mm:ss')}</div>,
  },
];