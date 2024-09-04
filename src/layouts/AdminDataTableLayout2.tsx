import { Col, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableColumnType,
  TableHeader,
} from 'react-bs-datatable';

type AdminDataTableLayout2Props<T extends object> = {
  headers: TableColumnType<T>[];
  body: T[];
};

const AdminDataTableLayout2 = <T extends object>({
  headers,
  body,
}: AdminDataTableLayout2Props<T>) => {
  return (
    <DatatableWrapper
      body={body}
      headers={headers}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 10,
          options: [5, 10, 15, 20],
        },
      }}
    >
      <Row className="mb-4">
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center justify-content-lg-start mb-lg-0 mb-3"
        >
          <p className="m-0 me-2">Pilih tahapan:</p>
          <DropdownButton title="Tahapan 1" variant="outline-primary">
            <Dropdown.Item>Tahapan 1</Dropdown.Item>
            <Dropdown.Item>Tahapan 2</Dropdown.Item>
            <Dropdown.Item>Tahapan 3</Dropdown.Item>
            <Dropdown.Item>Tahapan 4</Dropdown.Item>
            <Dropdown.Item>Tahapan 5</Dropdown.Item>
            <Dropdown.Item>Tahapan 6</Dropdown.Item>
            <Dropdown.Item>Tahapan 7</Dropdown.Item>
            <Dropdown.Item>Tahapan 8</Dropdown.Item>
            <Dropdown.Item>Tahapan 9</Dropdown.Item>
            <Dropdown.Item>Tahapan 10</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-col justify-content-end align-items-center mb-lg-0 mb-3"
        >
          <Filter
            placeholder="Cari..."
            classes={{
              clearButton: 'd-none',
              input: 'rounded ms-1',
            }}
          />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
      <Row className="mt-4 p-0">
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center justify-content-lg-start mb-lg-0 mb-3"
        >
          <PaginationOptions
            labels={{
              beforeSelect: 'Menampilkan',
            }}
            classes={{
              formGroup: 'd-flex align-items-center',
              formText: 'p-0 m-0',
              formControl: 'mx-1',
            }}
          />
          <p className="m-0">data</p>
        </Col>
        <Col className="d-flex p-0 m-0 justify-content-center align-items-center justify-content-lg-end align-items-lg-end">
          <Pagination
            classes={{
              button: 'btn-primary',
            }}
            labels={{
              firstPage: '<<',
              lastPage: '>>',
              nextPage: '>',
              prevPage: '<',
            }}
          />
        </Col>
      </Row>
    </DatatableWrapper>
  );
};

export default AdminDataTableLayout2;
