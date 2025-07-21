const EmptyTask = () => {
  return (
    <div className="items-center text-center w-90 py-12 border-2 border-dashed border-slate-700 rounded-lg">
      <h3 className="mt-2 text-lg font-medium text-white">Belum ada tugas</h3>
      <p className="mt-1 text-sm text-slate-400 ">
        Saatnya bersantai atau tambah tugas baru!
      </p>
    </div>
  );
};

export default EmptyTask;
