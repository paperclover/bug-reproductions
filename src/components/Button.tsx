export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const baseClasses = 'px-2 py-1 rounded-sm uppercase font-black text-sm';
  const variantClasses = variant === 'primary'
    ? 'bg-emerald-500 text-white'
    : 'bg-cyan-600 text-white';
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {label}
    </button>
  );
}
