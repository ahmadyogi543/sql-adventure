import { FC, ReactNode } from 'react';
import Footer from '../components/Footer';

type AdminLayout = {
  children: ReactNode;
  title: string;
};

const AdminLayout: FC<AdminLayout> = ({ children, title }) => {
  return (
    <>
      <div className="flex-grow-1 p-4">
        <div className="mb-5">
          <h3>{title}</h3>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
