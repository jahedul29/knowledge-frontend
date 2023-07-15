import { FC } from 'react';
import { Link } from 'react-router-dom';
export interface ISectionHeaderProps {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

const SectionHeader: FC<ISectionHeaderProps> = ({
  title,
  subtitle,
  buttonLabel,
  buttonUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 mt-16 mb-10">
      {subtitle && <p className="text-xl">{subtitle}</p>}
      <h2 className="text-3xl font-semibold">{title}</h2>
      {buttonLabel && buttonUrl && (
        <Link className="text-primary font-medium" to={buttonUrl}>
          {buttonLabel}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
