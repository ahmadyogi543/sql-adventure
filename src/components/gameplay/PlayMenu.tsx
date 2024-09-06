import { Col, Container, Row } from 'react-bootstrap';

import GameplayMenuLayout from '../../layouts/GameplayMenuLayout';
import { useGameMenuStore } from '../../store/GameMenuStore';

import Chara from './Chara';
import Query from './Query';
import Output from './Output';

import STAGES from '../../data/stages.json';
import useSQLExecutor from '../../hooks/useSQLExecutor';

const PlayMenu = () => {
  const { id } = useGameMenuStore();
  const stage = STAGES.find((stage) => stage.id === id);
  if (!stage) return null;

  const { exec, run, check, validate, loading } = useSQLExecutor(
    stage.filepath
  );

  if (loading) return null;

  return (
    <GameplayMenuLayout title="BERMAIN">
      <Container className="flex-column-grow" fluid>
        <Row className="flex-row-grow my-3">
          <Col className="flex-column-grow" md={6}>
            <Chara title={stage.title} missions={stage.missions} />
          </Col>
          <Col className="flex-column-grow" md={6}>
            <Output />
          </Col>
        </Row>
        <Query />
        <div className="flex-center gap-4 py-2 mt-2 bg-primary text-secondary rounded">
          <div className="small text-decoration-underline">
            {'biaya (id, hari, wisatawan, harga)'}
          </div>
          <div className="small text-decoration-underline">
            {'petugas (id, nama, tugas, lama_bekerja)'}
          </div>
          <div className="small text-decoration-underline">
            {'fasilitas (id, nama, jumlah, jenis, status)'}
          </div>
          <div className="small text-decoration-underline">
            {'tumbuhan (id, nama, nama_latin, habitat, jumlah, status)'}
          </div>
        </div>
      </Container>
    </GameplayMenuLayout>
  );
};

export default PlayMenu;
