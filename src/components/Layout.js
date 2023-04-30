const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-fit py-10">
      <div className="mx-auto my-10 w-72 h-72 rounded-full border-4 border-gray-800 hover:animate-spin">
        <div className="flex items-center justify-center h-full rounded-full bg-gray-800 text-white font-bold text-3xl tracking-wider">
          <div className="transform rotate-12">
            <div className="text-5xl font-barrio">VINYL</div>
            <div className="text-3xl font-barrio">VAULT</div>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
