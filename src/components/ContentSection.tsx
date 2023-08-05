import React from "react";

function ContentSection({
  isEmpty,
  emptyTitle,
  emptyDescription,
  emptyContent,
  title,
  children,
  className,
  actions,
}: React.PropsWithChildren<{
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyContent?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
  className?: string;
}>) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between flex-wrap">
        <h3 className="title mb-2">{title}</h3>
        {actions}
      </div>

      {isEmpty ? (
        <div className=" border border-dashed border-grey-main p-4 flex flex-col items-center justify-center text-center min-h-[237px] rounded-[10px] my-8 dark:border-[rgba(255,255,255,0.10)]">
          <h3 className="title">{emptyTitle}</h3>
          <p className="pri-text  mt-[10px]">{emptyDescription}</p>
          {emptyContent}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default ContentSection;
