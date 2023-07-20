import { Row } from '@tanstack/react-table';
import { userSchema } from 'components/AdminPanel/UserList/schema';
import { ROLES } from '@prisma/client';
import { BsArrowUpRightSquare } from 'react-icons/bs';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData> ({
  row,
}: DataTableRowActionsProps<TData>) {
  // const [isOpen, setIsOpen] = useState(false);
  const user = userSchema.parse(row.original);

  if (user.role !== ROLES.SPECIALIST) return null;
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`./dashboard/community/${user.id}`}
        className="p-1"
      >
        <BsArrowUpRightSquare size={32} />
      </a>
      {/*<button*/}
      {/*  id="dropdownDefaultButton"*/}
      {/*  className="text-black hover:bg-gray-400 p-2 text-center"*/}
      {/*  onClick={() => setIsOpen(!isOpen)}*/}
      {/*>*/}
      {/*  <HiDotsHorizontal />*/}
      {/*</button>*/}
      {/*{isOpen*/}
      {/*  ? <div*/}
      {/*    id="dropdown"*/}
      {/*    className="z-10 absolute bg-white"*/}
      {/*  >*/}
      {/*    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">*/}
      {/*      <li>*/}
      {/*        <a*/}
      {/*          target="_blank"*/}
      {/*          rel="noopener noreferrer"*/}
      {/*          href={`./dashboard/community/${user.id}`}*/}
      {/*          className="block px-4 py-2 hover:bg-gray-100"*/}
      {/*        >*/}
      {/*          Podgląd*/}
      {/*        </a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  : null*/}
      {/*}*/}
    </>
  );
}