import { TableColumnType } from 'react-bs-datatable';

import AdminDataTableLayout2 from '../../layouts/AdminDataTableLayout2';
import AdminLayout from '../../layouts/AdminLayout';
import { Button, Modal, Table } from 'react-bootstrap';
import { FaList } from 'react-icons/fa';
import { formatDate } from '../../utils/formatDate';
import { useState } from 'react';

type User = {
  id: number;
  username: string;
  name: string;
  institution: string;
  score: number;
  lastAttempted: string;
  action?: void;
};

// TODO: integrate data from API
const body: User[] = [
  {
    id: 1,
    username: 'ahmadyogi543',
    name: 'Ahmad Yogi',
    institution: 'Universitas Lambung Mangkurat',
    score: 100,
    lastAttempted: formatDate(new Date('2024-12-20 12:00:00')),
  },
];

const headers: TableColumnType<User>[] = [
  { title: 'No.', prop: 'id' },
  { title: 'Nama Pengguna', prop: 'username', isFilterable: true },
  { title: 'Nama', prop: 'name', isFilterable: true },
  { title: 'Institusi', prop: 'institution', isFilterable: true },
  { title: 'Skor', prop: 'score', isFilterable: true },
  { title: 'Terakhir Akses', prop: 'lastAttempted', isFilterable: true },
  {
    title: 'Aksi',
    prop: 'action',
    cell: () => <MissionDetail />,
  },
];

const AdminStatsPage = () => {
  return (
    <AdminLayout title="STATISTIK">
      <AdminDataTableLayout2 headers={headers} body={body} />
    </AdminLayout>
  );
};

const MissionDetail = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <Button
        title="Detail Misi"
        onClick={toggleShow}
        size="sm"
        variant="outline-primary"
      >
        <FaList />
      </Button>

      <Modal centered size="lg" show={show} onHide={toggleShow}>
        <Modal.Header className="p-4" closeButton>
          <Modal.Title>DETAIL MISI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Table className="p-0 m-0" striped bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Misi</th>
                  <th>Percobaan</th>
                  <th>Terakhir Mencoba</th>
                  <th>Skor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mengenal Hewan</td>
                  <td>4</td>
                  <td>{formatDate(new Date('2022-05-22 08:55:24'))}</td>
                  <td>{'[20, 60, 80, 100]'}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mengenal Tumbuhan</td>
                  <td>2</td>
                  <td>{formatDate(new Date('2022-05-22 08:58:24'))}</td>
                  <td>{'80, 100]'}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mengenal Alam</td>
                  <td>1</td>
                  <td>{formatDate(new Date('2022-05-22 09:01:24'))}</td>
                  <td>{'[80]'}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mengenal Petugas</td>
                  <td>3</td>
                  <td>{formatDate(new Date('2022-05-22 09:05:24'))}</td>
                  <td>{'[80, 80, 100]'}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mengenal Warga</td>
                  <td>3</td>
                  <td>{formatDate(new Date('2022-05-22 09:10:24'))}</td>
                  <td>{'[80, 80, 100]'}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={toggleShow}>
            TUTUP
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminStatsPage;
