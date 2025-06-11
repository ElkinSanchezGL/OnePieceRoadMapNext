import { ReactNode } from 'react';

type SagaInfoPanelProps = {
  title: string;
  text: string;
  imageUrl?: string;
  bottomImageUrl?: string;
  children?: ReactNode;
};

export const SagaInfoPanel = ({
  title,
  text,
  imageUrl,
  bottomImageUrl,
  children,
}: SagaInfoPanelProps) => {
  return (
    <div
      className="bg-yellow-100 border border-yellow-400 rounded-lg shadow-lg p-6 w-[950px] h-[650px] text-brown-800 overflow-auto"
      style={{ boxShadow: 'inset 0 0 30px #7b4c20' }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="mb-4 mx-auto w-40 rounded-md shadow-md"
        />
      )}

      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center mb-6">{text}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
        {children}
      </div>

      {bottomImageUrl && (
        <img
          src={bottomImageUrl}
          alt="Banner"
          className="mt-4 mx-auto max-w-full max-h-[250px] h-auto"
        />
      )}
    </div>
  );
};
