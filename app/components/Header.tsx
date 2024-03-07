import { Divider, Link } from '@nextui-org/react';

const Header = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between px-2 md:px-4">
        <p className="text-xl font-bold">Why Midnight Sun</p>
        <Link
          isExternal
          href="https://feng-y.notion.site/Why-Midnight-Sun-Dev-Notes-f6bfb29cc9af46a4b9dac9f4f5441e87?pvs=4"
          color="foreground"
          showAnchorIcon
        >
          Development Note
        </Link>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
