import React from "react";
import cx from "classnames";

function PageBanner({
  title,
  description,
  contentClassName,
  className,
  children,
}: React.PropsWithChildren<{
  title: string;
  description?: React.ReactNode;
  contentClassName?: string;
  className?: string;
}>) {
  return (
    <div
      className={cx(
        "bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(26,38,64,0.80)] bg-[url(/banner.png)] min-h-[185px] w-full flex items-center p-10 rounded-[10px]",
        className
      )}
    >
      <div className={cx("max-w-[356px]", contentClassName)}>
        <h3 className="text-white text-3xl font-bold mb-2">{title}</h3>
        <p className="text-grey-main text-xs">{description}</p>
        {children}
      </div>
    </div>
  );
}

export default PageBanner;
