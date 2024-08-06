import React from 'react';
import Header from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

export function withLayout<T extends {}>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
