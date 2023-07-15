import { FC } from 'react';
import Breadcrumb, { BreadcrumbItem } from '../BreadCrumb';
import Container from '../Container';

export interface IPageHeaderProps {
  pageTitle: string;
  breadCrumbItems?: BreadcrumbItem[];
}

const PageHeader: FC<IPageHeaderProps> = ({ pageTitle, breadCrumbItems }) => {
  return (
    <div className="mb-10 bg-[url('/assets/images/banner-bg.png')] bg-contain bg-top h-[230px] text-white">
      <div className="backdrop-blur-md h-full w-full flex flex-col justify-center">
        <Container>
          <h1 className="text-3xl font-semibold mb-2 pt-8">{pageTitle}</h1>

          {breadCrumbItems && breadCrumbItems?.length > 1 && (
            <Breadcrumb items={breadCrumbItems} />
          )}
        </Container>
      </div>
    </div>
  );
};

export default PageHeader;
