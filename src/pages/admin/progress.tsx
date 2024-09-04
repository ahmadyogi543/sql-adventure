import { Button, ProgressBar } from 'react-bootstrap';
import { TableColumnType } from 'react-bs-datatable';

import AdminDataTableLayout from '../../layouts/AdminDataTableLayout';
import AdminLayout from '../../layouts/AdminLayout';
import { FC } from 'react';
import { TbReload } from 'react-icons/tb';

type User = {
  id: number;
  username: string;
  name: string;
  institution: string;
  progress: number;
  action?: void;
};

// TODO: integrate data from API
const body: User[] = [
  {
    id: 1,
    username: 'ahmadyogi543',
    name: 'Ahmad Yogi',
    institution: 'Universitas Lambung Mangkurat',
    progress: 30,
  },
];

const headers: TableColumnType<User>[] = [
  { title: 'No.', prop: 'id' },
  { title: 'Nama Pengguna', prop: 'username', isFilterable: true },
  { title: 'Nama', prop: 'name', isFilterable: true },
  { title: 'Institusi', prop: 'institution', isFilterable: true },
  {
    title: 'Progress Pengguna',
    prop: 'progress',
    cell: (row) => <UserProgressBar progress={row.progress} />,
  },
  {
    title: 'Aksi',
    prop: 'action',
    cell: () => (
      <Button size="sm" title="Reset" variant="outline-primary">
        <TbReload />
      </Button>
    ),
  },
];

const AdminProgressPage = () => {
  return (
    <AdminLayout title="PROGRESS">
      <AdminDataTableLayout headers={headers} body={body} />
    </AdminLayout>
  );
};

const UserProgressBar: FC<{ progress: number }> = ({ progress }) => (
  <ProgressBar
    className="mt-1"
    label={`${progress}%`}
    now={progress}
    variant={
      progress >= 35
        ? progress >= 65
          ? progress >= 85
            ? 'success'
            : 'info'
          : 'warning'
        : 'danger'
    }
  />
);

export default AdminProgressPage;
